const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  sendmail: true
});

const selectionSteps = (selection) => {
  return selection.steps.map((step, index) => {
    return `\t${ index + 1 }: ${ step.type }\t${ step.value }`
  });
}

const buildBody = (request) => {
  return [].concat(
    [
      `Product: ${ request.product.title }`,
      `Contact Details: ${ request.contact }`,
      `Name: ${ request.selection.user.full_name }`,
      `Selections:`
    ],
    selectionSteps(request.selection)
  );
}

module.exports = (requestId) => {
  const models = require('../models');
  const Request = models.Request;

  Request.findById(
    requestId,
    {
      include: [
        { model: models.Selection, as: 'selection', include: [ 'user' ] },
        'product'
      ]
    }
  )
         .then(request => {
           const body = buildBody(request).join("\n");
           const mailOptions = {
             to: process.env.REQUEST_EMAIL,
             subject: 'Web Request',
             text: body
           };

           return transporter.sendMail(mailOptions);
         });
}

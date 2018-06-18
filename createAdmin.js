const prompt = require('prompt');
const models = require('./models');
const Admin = models.Admin;

const schema = {
  properties: {
    username: {
      message: 'Username',
      required: true
    },
    password: {
      message: 'Password',
      hidden: true
    }
  }
};

prompt.start();

prompt.get(schema, function (err, result) {
  if (err) {
    console.error(err);
    return;
  }

  Admin.create({
    username: result.username,
    password: result.password
  })
       .then(admin => {
         console.log(`Created an admin user: ${ admin.username }`);
       })
       .catch(error => {
         console.error('Something went wrong', error);
       });
});

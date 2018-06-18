const models = require('../../../models');
const User = models.User;
const Sequelize = require('sequelize');

module.exports = (req, res) => {
  const payload = {
    full_name: req.body.full_name,
    company_name: req.body.company_name,
    email_address: req.body.email_address,
    job_title: req.body.job_title,
    marketing_confirmation: req.body.marketing_confirmation,
  };

  User.create(payload)
      .then(user => {
        res.json(user);
      })
      .catch(Sequelize.ValidationError, error => {
        res.status(400).send(error);
      });
}

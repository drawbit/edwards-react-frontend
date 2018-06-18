const models = require('../../../models');
const Request = models.Request;
const Sequelize = require('sequelize');

module.exports = (req, res) => {
  const payload = {
    selection_id: req.body.selection_id,
    product_slug: req.body.product,
    kind: req.body.kind,
    contact: req.body.contact
  };

  Request.create(payload)
         .then(request => res.json(request))
         .catch(Sequelize.ValidationError, error => {
           res.status(400).send(error);
         });
}

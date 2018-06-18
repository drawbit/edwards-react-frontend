const models = require('../../../models');
const Selection = models.Selection;
const Sequelize = require('sequelize');

module.exports = (req, res) => {
  const payload = {
    start: req.body.start,
    steps: [],
    user_id: req.body.user_id,
  };

  Selection.create(payload)
           .then(selection => selection.getData())
           .then(selectionData => res.json(selectionData))
           .catch(Sequelize.ValidationError, error => {
             res.status(400).send(error);
           });
}

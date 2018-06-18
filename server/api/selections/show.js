const models = require('../../../models');
const Selection = models.Selection;
const Sequelize = require('sequelize');

module.exports = (req, res) => {
  Selection.findById(req.params.id)
           .then(selection => {
             if (!selection) {
               return res.status(404).json({ 'errors': 'Not Found' });
             }
             selection.getData()
                      .then(selectionData => res.json(selectionData));
           });
}

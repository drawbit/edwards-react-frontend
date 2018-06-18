const models = require('../../../models');
const Selection = models.Selection;

module.exports = (req, res) => {
  Selection.findById(req.params.id)
           .then(selection => {
             if (!selection) {
               return res.status(404).json({ 'error': 'Not Found' });
             }

             selection.getProducts()
                      .then(selectionProducts => res.json(selectionProducts));
           });
}

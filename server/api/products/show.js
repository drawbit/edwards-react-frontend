const models = require('../../../models');
const Product = models.Product;
const Sequelize = require('sequelize');

module.exports = (req, res) => {
  Product.find({ where: { slug: req.params.slug } })
         .then(product => {
           if (!product) {
             return res.status(404).json({ 'error': 'Not Found' });
           }
           res.json(product);
         });
}

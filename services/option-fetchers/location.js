module.exports = () => {
  const models = require('../../models');

  return models.Location.findAll({
    order: [['id', 'ASC']]
  });
}

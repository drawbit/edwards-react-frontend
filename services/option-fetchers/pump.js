module.exports = () => {
  const models = require('../../models');

  return models.Pump.findAll({
    order: [['label', 'ASC']]
  })
               .then(pumps => pumps.map(pump => pump.toJSON()))
}

const pump = require('./pump');
const filter = require('./filter');
const location = require('./location');

const FETCHERS = {
  PUMP: pump,
  APPLICATION: filter(1),
  MAINTENANCE: filter(2),
  RISK: filter(3),
  LOCATION: location
}

module.exports = (type, pump) => {
  const models = require('../../models');
  const Pump = models.Pump;

  if (pump) {
    return Pump.findById(pump.id)
               .then(pump => FETCHERS[type](pump))
  }
  else {
    return FETCHERS[type]();
  }
}

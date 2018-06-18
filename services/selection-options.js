const SELECTION_ORDER = require('../selection_order.json');
const optionFetchers = require('./option-fetchers');

module.exports = (start, steps) => {
  if (steps.length == 5) return Promise.resolve(null);
  const pump = steps.find(step => step.type == 'pump');

  const order = SELECTION_ORDER[start];
  const type = order[steps.length];

  return optionFetchers(type, pump)
    .then(options => ({
      type: type,
      options: options
    }));
}

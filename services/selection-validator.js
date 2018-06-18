const SELECTION_ORDER = require('../selection_order.json');

module.exports = (steps, start) => {
  const stepCount = steps.length;
  if (stepCount == 0) return true;
  if (stepCount > 5) return false;

  const correctOrder = SELECTION_ORDER[start];
  const index = steps.length - 1;

  return steps[index].type == correctOrder[index];
}

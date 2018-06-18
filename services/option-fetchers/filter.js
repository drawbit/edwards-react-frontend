module.exports = (categoryId) => {
  return (pump) => {
    const models = require('../../models');
    let find = null;

    if (pump) {
      find = pump.getFilters({
        where: { category_id: categoryId },
        order: [['label', 'ASC']]
      });
    }
    else {
      find = models.Filter.findAll({
        where: { category_id: categoryId },
        order: [['label', 'ASC']]
      });
    }

    return find.then(models => {
      return models.map(model => model.toJSON());
    });
  }
}

const models = require('../../../models');
const User = models.User;

module.exports = (req, res) => {
  User.destroy({ where: {} })
      .then(() => res.sendStatus(204));
}

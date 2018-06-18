const auth = require('../../middleware/auth');

module.exports = (req, res, context) => {
  return new Promise((resolve, reject) => {
    auth(req, res, (error) => {
      if (error) {
        res.status(error.statusCode).send({ message: error.message });
        resolve(context.stop);
      }
      else {
        resolve(context.continue);
      }
    });
  });
}

const jwt = require('jsonwebtoken');
const models = require('../../models');
const Admin = models.Admin;

module.exports = (req, res, next) => {
  const token = req.headers['x-access-token'];

  if (!token) {
    return res.status(403).json({ error: 'Forbidden' });
  }

  jwt.verify(token, process.env.SECRET, (error, decoded) => {
    if (error) {
      return res.status(403).json({ error: 'Forbidden' });
    }

    return Admin.findById(decoded.id)
                .then(instance => {
                  if (!instance) {
                    return res.status(403).json({ error: 'Forbidden' });
                  }

                  req.admin = instance;
                  next();
                  return null;
                });
  });
}

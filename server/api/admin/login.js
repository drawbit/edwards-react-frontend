const models = require('../../../models');
const Admin = models.Admin;

module.exports = (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  Admin.findOne({ where: { username } })
       .then(admin => {
         if (!admin || !admin.authenticate(password)) {
           return res.status(401).json({ error: 'Unauthorized' });
         }

         res.json({ token: admin.buildToken() });
       });
}

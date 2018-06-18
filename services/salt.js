const bcrypt = require('bcrypt');

const ROUNDS = 10;

module.exports = bcrypt.genSaltSync(ROUNDS);

'use strict';

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const salt = require('../services/salt');

module.exports = function(sequelize, DataTypes) {
  var Admin = sequelize.define('Admin', {
    username: DataTypes.STRING,
    passwordDigest: DataTypes.STRING,
    password: {
      type: DataTypes.VIRTUAL,
      validate: {
        notEmpty: true
      },
      passwordLength: function (value) {
        if (value.length >= 8) return;
        throw new Error('must be 8 characters or longer');
      },
      set: function(value) {
        this.setDataValue('password', value);
        this.setDataValue('passwordDigest', bcrypt.hashSync(value, salt));
      }
    }
  });

  Admin.prototype.authenticate = function(value) {
    if (bcrypt.compareSync(value, this.passwordDigest))
      return this;
    else
      return false;
  }

  Admin.prototype.buildToken = function() {
    return jwt.sign(
      { id: this.id },
      process.env.SECRET
    )
  }

  return Admin;
};

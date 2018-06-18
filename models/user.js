'use strict';
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    id: {
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      type: DataTypes.UUID
    },
    full_name: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: 'Is required'
        }
      }
    },
    company_name: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: 'Is required'
        }
      }
    },
    email_address: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          msg: 'Not a valid email address'
        },
        notEmpty: {
          msg: 'Is required'
        }
      }
    },
    job_title: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: 'Is required'
        }
      }
    },
    marketing_confirmation: {
      allowNull: false,
      type: DataTypes.BOOLEAN
    }
  }, {
    paranoid: true
  });

  User.associate = function(models) {
    User.hasOne(models.Selection, {
      as: 'selection',
      foreignKey: 'user_id'
    });
  }

  return User;
};

'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    //attributes
    firstName: {
    type: DataTypes.STRING,
    allowNull: true
  },
    lastName: {
    type: DataTypes.STRING,
    allowNull: true
  },
    email: {
    type: DataTypes.STRING,
    allowNull: true,
    unique: true,
    validate: {
      isEmail: true,
    }
  },
    password: {
    type: DataTypes.STRING,
    allowNull: true,
  },

    company: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
    role: {
        type: DataTypes.ENUM,
        values:['admin','user']
    }
  }, {});
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};
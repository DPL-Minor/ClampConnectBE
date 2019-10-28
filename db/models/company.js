'use strict';
module.exports = (sequelize, DataTypes) => {
  const Company = sequelize.define('Company', {
  	//attributes
    name: {
      type: DataTypes.STRING, 
  },
    phonenumber: {
      type: DataTypes.STRING,
  },
    email: {
    type: DataTypes.STRING,
  },
    admin: {
      type: DataTypes.STRING
    }
  }, {});
  Company.associate = function(models) {
    // associations can be defined here
  };
  return Company;
};
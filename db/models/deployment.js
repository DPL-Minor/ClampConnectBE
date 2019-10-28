'use strict';
module.exports = (sequelize, DataTypes) => {
  const Deployment = sequelize.define('Deployment', {
  	//attributes
    status: {
      type: DataTypes.STRING, 
  },
    location: {
      type: DataTypes.STRING, 
  },
    clamp: {
      type: DataTypes.STRING,
  },
    user: {
      type: DataTypes.STRING
    }
  }, {});
  Deployment.associate = function(models) {
    // associations can be defined here
  };
  return Deployment;
};
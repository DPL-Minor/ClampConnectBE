'use strict';
module.exports = (sequelize, DataTypes) => {
  const DeploymentResult = sequelize.define('DeploymentResult', {
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
  DeploymentResult.associate = function(models) {
    // associations can be defined here
  };
  return DeploymentResult;
};
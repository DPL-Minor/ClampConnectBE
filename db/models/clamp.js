'use strict';
module.exports = (sequelize, DataTypes) => {
  const Clamp = sequelize.define('Clamp', {
  	//attributes
    type: {
      type: DataTypes.STRING,
  },
    user: {
      type: DataTypes.INTEGER,
  },
    company: {
      type: DataTypes.STRING,
  },
    user: {type: DataTypes.STRING
    }
  }, {});
  Clamp.associate = function(models) {
    // associations can be defined here
  };
  return Clamp;
};
module.exports = function (sequelize, DataTypes) {
  return sequelize.define('Department', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    classMethods: {
      associate: function (models) {
        // associations can be defined here
      }
    }
  });
};
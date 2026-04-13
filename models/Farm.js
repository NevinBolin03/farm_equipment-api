module.exports = (sequelize, DataTypes) => {
  return sequelize.define("Farm", {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false
    },
    ownerName: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
};
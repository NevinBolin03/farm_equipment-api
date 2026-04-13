module.exports = (sequelize, DataTypes) => {
  return sequelize.define("Equipment", {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false
    },
    purchaseYear: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    farmId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });
};
module.exports = (sequelize, DataTypes) => {
  return sequelize.define("MaintenanceRecord", {
    serviceDate: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    cost: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    equipmentId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });
};
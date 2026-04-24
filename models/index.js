// Sequelize initialization and model relationships

const { Sequelize, DataTypes } = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: process.env.DB_STORAGE || "database/database.sqlite",
  logging: false
});

const FarmModel = require("./Farm");
const EquipmentModel = require("./Equipment");
const MaintenanceRecordModel = require("./MaintenanceRecord");

const Farm = FarmModel(sequelize, DataTypes);
const Equipment = EquipmentModel(sequelize, DataTypes);
const MaintenanceRecord = MaintenanceRecordModel(sequelize, DataTypes);

Farm.hasMany(Equipment, { foreignKey: "farmId", onDelete: "CASCADE" });
Equipment.belongsTo(Farm, { foreignKey: "farmId" });

Equipment.hasMany(MaintenanceRecord, { foreignKey: "equipmentId", onDelete: "CASCADE" });
MaintenanceRecord.belongsTo(Equipment, { foreignKey: "equipmentId" });

module.exports = {
  sequelize,
  Farm,
  Equipment,
  MaintenanceRecord
};
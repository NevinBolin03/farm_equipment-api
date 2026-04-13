const { sequelize } = require("../models");

async function setupDatabase() {
  try {
    await sequelize.sync({ force: true });
    console.log("Database tables created successfully.");
    process.exit();
  } catch (error) {
    console.error("Error setting up database:", error);
    process.exit(1);
  }
}

setupDatabase();
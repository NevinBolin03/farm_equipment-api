// Main application setup and route configuration

const express = require("express");
const logger = require("./middleware/logger");
const errorHandler = require("./middleware/errorHandler");

const farmRoutes = require("./routes/farms");
const equipmentRoutes = require("./routes/equipment");
const maintenanceRecordRoutes = require("./routes/maintenanceRecords");

const app = express();

app.use(express.json());
app.use(logger);

app.get("/", (req, res) => {
  res.json({ message: "Farm Equipment API is running" });
});

app.use("/api/farms", farmRoutes);
app.use("/api/equipment", equipmentRoutes);
app.use("/api/maintenance-records", maintenanceRecordRoutes);

app.use(errorHandler);

module.exports = app;
// CRUD routes for maintenance records

const express = require("express");
const router = express.Router();
const { MaintenanceRecord } = require("../models");

router.get("/", async (req, res, next) => {
  try {
    const records = await MaintenanceRecord.findAll();
    res.json(records);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const record = await MaintenanceRecord.findByPk(req.params.id);
    if (!record) {
      return res.status(404).json({ error: "Maintenance record not found" });
    }
    res.json(record);
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res) => {
  try {
    const record = await MaintenanceRecord.create(req.body);
    res.status(201).json(record);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const record = await MaintenanceRecord.findByPk(req.params.id);
    if (!record) {
      return res.status(404).json({ error: "Maintenance record not found" });
    }
    await record.update(req.body);
    res.json(record);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const record = await MaintenanceRecord.findByPk(req.params.id);
    if (!record) {
      return res.status(404).json({ error: "Maintenance record not found" });
    }
    await record.destroy();
    res.json({ message: "Maintenance record deleted successfully" });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
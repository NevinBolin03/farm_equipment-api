// CRUD routes for equipment

const express = require("express");
const router = express.Router();
const { Equipment } = require("../models");

router.get("/", async (req, res, next) => {
  try {
    const equipment = await Equipment.findAll();
    res.json(equipment);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const item = await Equipment.findByPk(req.params.id);
    if (!item) {
      return res.status(404).json({ error: "Equipment not found" });
    }
    res.json(item);
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res) => {
  try {
    const item = await Equipment.create(req.body);
    res.status(201).json(item);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const item = await Equipment.findByPk(req.params.id);
    if (!item) {
      return res.status(404).json({ error: "Equipment not found" });
    }
    await item.update(req.body);
    res.json(item);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const item = await Equipment.findByPk(req.params.id);
    if (!item) {
      return res.status(404).json({ error: "Equipment not found" });
    }
    await item.destroy();
    res.json({ message: "Equipment deleted successfully" });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
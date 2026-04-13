const express = require("express");
const router = express.Router();
const { Farm } = require("../models");

router.get("/", async (req, res, next) => {
  try {
    const farms = await Farm.findAll();
    res.json(farms);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const farm = await Farm.findByPk(req.params.id);
    if (!farm) {
      return res.status(404).json({ error: "Farm not found" });
    }
    res.json(farm);
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res) => {
  try {
    const farm = await Farm.create(req.body);
    res.status(201).json(farm);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const farm = await Farm.findByPk(req.params.id);
    if (!farm) {
      return res.status(404).json({ error: "Farm not found" });
    }
    await farm.update(req.body);
    res.json(farm);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const farm = await Farm.findByPk(req.params.id);
    if (!farm) {
      return res.status(404).json({ error: "Farm not found" });
    }
    await farm.destroy();
    res.json({ message: "Farm deleted successfully" });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
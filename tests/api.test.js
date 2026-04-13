const request = require("supertest");
const app = require("../app");
const { sequelize, Farm, Equipment, MaintenanceRecord } = require("../models");

beforeAll(async () => {
  await sequelize.sync({ force: true });

  const farm = await Farm.create({
    name: "Test Farm",
    location: "Test Location",
    ownerName: "Test Owner"
  });

  const equipment = await Equipment.create({
    name: "Test Tractor",
    type: "Tractor",
    purchaseYear: 2022,
    farmId: farm.id
  });

  await MaintenanceRecord.create({
    serviceDate: "2026-04-10",
    description: "Test maintenance",
    cost: 100,
    equipmentId: equipment.id
  });
});

afterAll(async () => {
  await sequelize.close();
});

test("GET /api/farms should return farms", async () => {
  const res = await request(app).get("/api/farms");
  expect(res.statusCode).toBe(200);
  expect(Array.isArray(res.body)).toBe(true);
});

test("POST /api/farms should create a farm", async () => {
  const res = await request(app).post("/api/farms").send({
    name: "New Farm",
    location: "Missouri",
    ownerName: "Nevin"
  });

  expect(res.statusCode).toBe(201);
  expect(res.body.name).toBe("New Farm");
});

test("GET /api/equipment should return equipment", async () => {
  const res = await request(app).get("/api/equipment");
  expect(res.statusCode).toBe(200);
});

test("GET /api/maintenance-records should return records", async () => {
  const res = await request(app).get("/api/maintenance-records");
  expect(res.statusCode).toBe(200);
});
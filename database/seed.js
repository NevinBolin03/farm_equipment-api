const { Farm, Equipment, MaintenanceRecord, sequelize } = require("../models");

async function seedDatabase() {
  try {
    await sequelize.sync({ force: true });

    const farm1 = await Farm.create({
      name: "Bolin Family Farm",
      location: "Bolivar, Missouri",
      ownerName: "Nevin Bolin"
    });

    const farm2 = await Farm.create({
      name: "River Bend Acres",
      location: "Springfield, Missouri",
      ownerName: "Jake Turner"
    });

    const equipment1 = await Equipment.create({
      name: "John Deere 6155M",
      type: "Tractor",
      purchaseYear: 2020,
      farmId: farm1.id
    });

    const equipment2 = await Equipment.create({
      name: "Case IH Round Baler",
      type: "Baler",
      purchaseYear: 2018,
      farmId: farm1.id
    });

    const equipment3 = await Equipment.create({
      name: "Ford F-250 Service Truck",
      type: "Truck",
      purchaseYear: 2016,
      farmId: farm2.id
    });

    await MaintenanceRecord.create({
      serviceDate: "2026-04-01",
      description: "Oil change and filter replacement",
      cost: 249.99,
      equipmentId: equipment1.id
    });

    await MaintenanceRecord.create({
      serviceDate: "2026-03-15",
      description: "Hydraulic hose replacement",
      cost: 180.50,
      equipmentId: equipment2.id
    });

    await MaintenanceRecord.create({
      serviceDate: "2026-02-20",
      description: "Brake inspection and pad replacement",
      cost: 320.00,
      equipmentId: equipment3.id
    });

    console.log("Database seeded successfully.");
    process.exit();
  } catch (error) {
    console.error("Error seeding database:", error);
    process.exit(1);
  }
}

seedDatabase();
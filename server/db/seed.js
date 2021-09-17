const sequelizeDb = require("./models");
const User = require("./models/userModel");
const Token = require("./models/tokenModel");
const Product = require("./models/productModel");

async function seed() {
  await sequelizeDb.sync({ forse: true });
  console.log("DB synced.");

  const user001 = await User.create({
    email: "admin@mail.com",
    password: "123456",
    role: "admin",
    isActivated: false,
    activationLink: "activationLink",
  });

  const token001 = await Token.create({
    refreshToken: "refreshToken",
    userId: user001.id,
  });

  const product001 = await Product.create({
    title: "Chease Cake",
    imageId: "a02e8d1b-2fbe-4183-8746-ebf92b09cddd_guprtz",
    productPrice: 9.79,
    vendor: "1",
    segment: "cakes",
    description: "description2",
  });

  console.log(`seeded users and tokens`);
}

async function runSeed() {
  console.log("seeding...");
  try {
    await seed();
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  } finally {
    console.log("closing db connection");
    await sequelizeDb.close();
    console.log("db connection closed");
  }
}

if (module === require.main) {
  runSeed();
}

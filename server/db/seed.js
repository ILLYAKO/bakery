const sequelizeDb = require("./models");
const User = require("./models/userModel");
const Token = require("./models/tokenModel");

async function seed() {
  await sequelizeDb.sync({ forse: true });
  console.log("DB synced.");

  const user001 = await User.create({
    email: "user001@mail.com",
    password: "123456",
    isActivated: false,
    activationLink: "activationLink",
  });

  const token001 = await Token.create({
    refreshToken: "refreshToken",
    userId: user001.id,
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

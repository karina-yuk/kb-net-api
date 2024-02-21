const connection = require("../config/connection");
const { User, Thought } = require("../models");
const users = require("./userData");
const thoughts = require("./thoughtData");

connection.on("error", (err) => err);
connection.once("open", async () => {
  console.log("connected");

  let userCheck = await User.deleteMany({});
  let thoughtCheck = await Thought.deleteMany({});

  for (let i = 0; i < users.length; i++) {
    const userData = await User.create(users[i]);
    const thoughtData = await Thought.create(thoughts[i]);
    const user = await User.findOneAndUpdate(
      { _id: userData._id },
      { $addToSet: { thoughts: thoughtData._id } },
      { new: true }
    );
    console.log(user);
    console.log(thoughtData);
  }

  // Log out the seed data to indicate what should appear in the database
  console.info("Seeding complete! 🌱");
  process.exit(0);
});

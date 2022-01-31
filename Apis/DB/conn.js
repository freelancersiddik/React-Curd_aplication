const mongoose = require("mongoose");

const DB = process.env.DataBase;
mongoose
  .connect(DB)
  .then(() => {
    console.log(`Database Connect Successful..`);
  })
  .catch((error) => {
    console.log(`Find DB Error : ${error}`);
  });

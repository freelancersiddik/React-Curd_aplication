const express = require("express");
const router = express.Router();
const controller = require("../Controller/Controller");
require("../DB/conn");
const path = require("path");

__dirname = path.resolve();

if (process.env.NODE_ENV == "production") {
  app.use(express.static("client/build"));

  const path = require("path");

  app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

router.use(express.static("client/build"));

router.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
});
// add worker
router.post("/add/worker", controller.addWorker);

// get all data
router.get("/all/worker", controller.allWorker);

// get one data
router.get("/one/worker/:_id", controller.oneWorker);

// update One
router.put("/update/worker/:_id", controller.updateWorker);

// delete data
router.delete("/delete/worker/:_id", controller.delete);

router.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
});

module.exports = router;

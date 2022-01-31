const Worker = require("../Model/Schemas");


// add worker
exports.addWorker = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      email,
      phone,
      birthday,
      joining,
      shift,
      position,
      salary,
    } = req.body;
    if (
      !firstName ||
      !lastName ||
      !email ||
      !phone ||
      !birthday ||
      !joining ||
      !shift ||
      !position ||
      !salary
    ) {
      res.status(422).json({ Error: "Invalid Field" });
    }

    const existWorker = await Worker.findOne({ email: email });
    if (existWorker) {
      res.status(421).json({ Error: "This Email Already Existed" });
    } else {
      const worker = await Worker({
        firstName,
        lastName,
        email,
        phone,
        birthday,
        joining,
        shift,
        position,
        salary,
      });
      await worker.save();
      res.status(200).json({ Message: "Inserted Successfully.." });
    }
  } catch (error) {
    console.log(error);
  }
};
// all worker
exports.allWorker = async (req, res) => {
  try {
    const data = await Worker.find({});
    res.send(data);
  } catch (error) {
    console.log(error);
  }
};

// one worker
exports.oneWorker = async (req, res) => {
  try {
    const result = await Worker.findById({ _id: req.params._id });
    res.send(result);
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
  }
};

// update Worker
exports.updateWorker = (req, res,next) => {
  const {
    firstName,
    lastName,
    email,
    phone,
    birthday,
    joining,
    shift,
    position,
    salary,
  } = req.body;
  Worker.findByIdAndUpdate(
    { _id: req.params._id },
    {
      $set: {
        firstName,
        lastName,
        email,
        phone,
        birthday,
        joining,
        shift,
        position,
        salary,
      },
    }
  ).then((result)=>{
    res.status(200).json({Msg:"Update Successful"})
  }).catch((error)=>{
    res.status(422).json({ error: "Error Found" });
  });
};

// delete
exports.delete = async (req, res) => {
  try {
    const deleteData = await Worker.findByIdAndDelete({ _id: req.params._id });
    if (!deleteData) {
      res.status(400).json({ Message: "Not Delete" });
    } else {
      res.status(200).json({ Message: "Delete" });
    }
  } catch (error) {
    console.log(error);
  }
};

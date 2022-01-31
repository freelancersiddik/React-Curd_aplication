const express = require("express");
const dotenv = require("dotenv");
dotenv.config({ path: "./config/.env" });
const app = express();
const bodyParser = require("body-parser");
app.use(express.json());
const port = process.env.PORT || 5000;

// import router from routes/router.js
const router = require("./Apis/Routes/routes");
app.use(router);
app.listen(port, () => {
  console.log(`Server running in ${port}`);
});

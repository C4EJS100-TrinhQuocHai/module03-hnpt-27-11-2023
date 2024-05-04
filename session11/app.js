const express = require("express");
const router = require("./src/routes/user.route");
const bodyParser = require('body-parser')

const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 8080;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
app.use("/", router);
app.listen(PORT, () => {
    console.log(`server đang lắng nghe http://localhost:${PORT}`);
})
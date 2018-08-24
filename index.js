const express = require("express");
const mongooge = require("mongoose");
const keys = require("./config/keys");
require("./models/User");
require("./services/passport");

mongooge.connect(
  keys.mongoURI,
  { useNewUrlParser: true }
);

const app = express();

require("./routes/authRoutes")(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running at port ${PORT}`));

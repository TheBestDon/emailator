const cookieSession = require("cookie-session");
const express = require("express");
const mongooge = require("mongoose");
const passport = require("passport");
const keys = require("./config/keys");
require("./models/User");
require("./services/passport");

mongooge.connect(
  keys.mongoURI,
  { useNewUrlParser: true }
);

const app = express();

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);

app.use(passport.initialize());
app.use(passport.session());

require("./routes/authRoutes")(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running at port ${PORT}`));

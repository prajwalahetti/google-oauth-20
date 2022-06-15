const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const morgan = require("morgan");
const passport = require("passport");
const session = require('express-session');

// load config
dotenv.config({ path: "./config/.env" });

// passport config
require("./config/passport")(passport);
connectDB();

const app = express();

// logging
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
// express session
app.use(session({
    secret: process.env.PASSPORT_SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
}))

//passport middleware
app.use(passport.initialize());
app.use(passport.session())

// Routes
app.use("/", require("./routes/index"));
app.use('/auth',require('./routes/auth'))
const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(` Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);

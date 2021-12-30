const express = require("express");
const passport = require("passport");
const cookieSession = require('cookie-session')
require("./db/mongoose");
require("./services/passport");
const authRouter = require("./routes/authRoutes");

const app = express();

// Middlewares
app.use(authRouter);
app.use(express.json());
app.use(cookieSession({
  maxAge: 30 * 24 * 60 * 60 * 1000,
  keys: [process.env.cookieKey]
}))
app.use(passport.initialize())
app.use(passport.session())

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

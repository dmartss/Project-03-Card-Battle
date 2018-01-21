const { compareSync } = require("bcryptjs");

const comparePass = (userPassword, databasePassword) =>
  compareSync(userPassword, databasePassword);

const loginRedirect = (req, res, next) => {
  if (req.user) {
    res.redirect("/user");
  }
  next();
};

const loginRequired = (req, res, next) => {
  if (!req.user) {
    res.redirect("/auth/login");
  }
  next();
};

module.exports = {
  comparePass,
  loginRedirect,
  loginRequired
};

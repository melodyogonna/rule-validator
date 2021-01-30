const {
  missingFieldHandler,
  wrongTypeHandler,
} = require("./errors/handlers.error");

app = require("express")();

app.use("/", require("./routes"));

app.use(missingFieldHandler);
app.use(wrongTypeHandler);
module.exports = app;

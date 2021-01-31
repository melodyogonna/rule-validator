const {
  missingFieldHandler,
  wrongTypeHandler,
  tooDeepHandler,
  failedValidationHandler,
} = require('./errors/handlers.error');

app = require('express')();

app.use('/', require('./routes'));

app.use(missingFieldHandler);
app.use(wrongTypeHandler);
app.use(tooDeepHandler);
app.use(failedValidationHandler);
module.exports = app;

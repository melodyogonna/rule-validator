const {
  missingFieldHandler,
  wrongTypeHandler,
  tooDeepHandler,
} = require('./errors/handlers.error');

app = require('express')();

app.use('/', require('./routes'));

app.use(missingFieldHandler);
app.use(wrongTypeHandler);
app.use(tooDeepHandler);
module.exports = app;

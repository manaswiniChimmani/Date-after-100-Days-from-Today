const addDays = require("date-fns/addDays");
const express = require("express");
const app = express();
app.get("/", (request, response) => {
  const a = addDays(new Date(), 100);
  response.send(`${a.getDate()}/${a.getMonth() + 1}/${a.getFullYear()}`);
});
app.listen(3000);
module.exports = app;

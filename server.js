const express = require("express");
const app = express();
app.set("view engine", "ejs");

app.use(express.static("public"));

app.get("/", function(req, res) {
  const headerSignalValue = req.header('Sec-GPC')
  res.render("index", {
    globalPrivacyControlValue: headerSignalValue,
  });
});

app.get("/.well-known/gpc", function(req, res) {
  res.sendFile(__dirname + "/public/.well-known/gpc.json");
});

const listener = app.listen(process.env.PORT, function() {
  console.log("Your app is listening on port " + listener.address().port);
});


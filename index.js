express = require("express");
var path = require("path");

const app = express();

app.use(express.static(path.join(__dirname, "public")));
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname + "/index.html"));
});
app.listen(process.env.port || 400);

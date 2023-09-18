const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();

app.use(function (req, res, next) {
  res.setHeader("Content-Security-Policy", "frame-ancestors 'self'");
  next();
});

// app.use(function (req, res, next) {
//   res.setHeader("X-Frame-Options", "sameorigin");
//   next();
// });

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname)));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/index.html"));
});

app.get("/test", (req, res) => {
  res.sendFile(path.join(__dirname + "/test.html"));
});

const server = app.listen(process.env.PORT || 5500, () => {
  const { port } = server.address();
  console.log(`Server running on PORT ${port}`);
});

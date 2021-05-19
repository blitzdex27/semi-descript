const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(path.resolve(__dirname, "client", "build")));

app.get("/", (req, res) => {
  res.sendFile("/index.html");
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log("Server started at port", port));

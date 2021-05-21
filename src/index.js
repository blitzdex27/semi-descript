// dependencies
const express = require("express");
const path = require("path");
const multer = require("multer");
// initializations
const app = express();
const upload = multer({ dest: "../data/uploads" });
// custom modules
const { uploadFile } = require("./controllers");
// configurations/middlewares
app.use(express.static(path.resolve(__dirname, "..", "client", "build")));

app.get("/", (req, res) => {
  res.sendFile("/index.html");
});

app.post("/upload", upload.single("media"), uploadFile);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log("Server started at port", port));

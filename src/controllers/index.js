const path = require("path");
const fs = require("fs");

const uploadFile = (req, res) => {
    console.log(req.file)
  const tempPath = path.resolve(__dirname, "..", "..", req.file.path);
  const targetPath = path.resolve(
    __dirname,
    "..",
    "..",
    "data",
    "uploads",
    req.file.originalname
  );

  const src = fs.createReadStream(tempPath);
  const dest = fs.createWriteStream(targetPath);
  src.pipe(dest);
  src.on("end", () =>
    res.json({ status: { error: null, message: "Done uploading" } })
  );
  src.on("error", (error) =>
    res.json({ status: { error: true, message: error.message } })
  );
};

module.exports = { uploadFile };

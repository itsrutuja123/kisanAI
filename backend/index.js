const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const multer = require("multer");
const { spawn } = require("child_process");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

// Set up image upload for disease prediction
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/"); // Uploads folder in backend
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  }
});
const upload = multer({ storage: storage });

// POST: Crop Recommendation
app.post("/predict-crop", (req, res) => {
  const data = req.body;

  const args = [
    data.N, data.P, data.K,
    data.temperature, data.humidity,
    data.ph, data.rainfall
  ];

  const pythonScript = path.join(__dirname, "ml_models", "crop_recommendation.py");

  const python = spawn("python", [pythonScript, ...args]);

  python.stdout.on("data", (data) => {
    res.json({ prediction: data.toString().trim() });
  });

  python.stderr.on("data", (data) => {
    console.error(`Crop Prediction Error: ${data}`);
    res.status(500).send("Crop prediction failed");
  });
});

// POST: Disease Prediction
app.post("/predict-disease", upload.single("leaf"), (req, res) => {
  const imagePath = req.file.path;
  const pythonScript = path.join(__dirname, "ml_models", "disease_prediction.py");

  const python = spawn("python", [pythonScript, imagePath]);

  python.stdout.on("data", (data) => {
    res.json({ disease: data.toString().trim() });
    fs.unlinkSync(imagePath); // Delete uploaded image after prediction
  });

  python.stderr.on("data", (data) => {
    console.error(`Disease Prediction Error: ${data}`);
    res.status(500).send("Disease prediction failed");
  });
});

app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});

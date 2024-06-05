const express = require('express');
const multer = require('multer');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors());

// Set up multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  }
});

const upload = multer({ storage: storage });

// Endpoint to handle file uploads
app.post('/upload', upload.single('file'), (req, res) => {
    console.log("lolee");
  res.json({ message: 'File uploaded successfully', file: req.file });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

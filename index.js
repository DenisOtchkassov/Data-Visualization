// Simple Express server to handle file uploads and serve our app
const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const fs = require('fs');
const path = require('path');
const csvParser = require('csv-parser');

const app = express();
const port = 3000;

// Set up multer for file uploads
const upload = multer({ dest: 'uploads/' });

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// Route to serve the main page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Route to handle CSV file upload
app.post('/upload', upload.single('csvFile'), (req, res) => {
  if (!req.file) {
    return res.status(400).send('No file uploaded.');
  }
  
  const results = [];
  
  fs.createReadStream(req.file.path)
    .pipe(csvParser())
    .on('data', (data) => results.push(data))
    .on('end', () => {
      // Send the parsed data back to the client
      res.json({
        filename: req.file.originalname,
        data: results.slice(0, 100) // Limit to first 100 rows for simplicity
      });
      
      // Clean up the uploaded file
      fs.unlinkSync(req.file.path);
    })
    .on('error', (error) => {
      res.status(500).send(`Error processing file: ${error.message}`);
    });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
}); 
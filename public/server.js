const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const axios = require('axios'); // Import axios
const DatabaseManager = require('./script');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Initialize DatabaseManager with the connection string
const connectionString = "Driver={SQL Server};Server=DESKTOP-QI6H2EA;Database=mangaSQL;Trusted_Connection=yes;";
const dbManager = new DatabaseManager(connectionString);

// API endpoint to execute a query
app.post('/executeQuery', async (req, res) => {
    const { sql } = req.body;

    try {
        const rows = await dbManager.query(sql);
        res.json({ success: true, rows });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});

// Serve manga images
app.get('/manga-images/:mangaName/:chapter/:pageNumber', async (req, res) => {
    const { mangaName, chapter, pageNumber } = req.params;
    const imageUrl = `https://images.mangafreak.me/mangas/${mangaName}/${mangaName}_${chapter}/${mangaName}_${chapter}_${pageNumber}.jpg`;
    
    try {
        const imageResponse = await axios.get(imageUrl, { responseType: 'arraybuffer' });
        const imageData = Buffer.from(imageResponse.data, 'binary');
        res.setHeader('Content-Type', 'image/jpeg');
        res.send(imageData);
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});

// Serve the React app from the 'build' directory
app.use(express.static(path.join(__dirname)));

// All remaining requests return the React app's index.html
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port: http://localhost:${PORT}`);
});

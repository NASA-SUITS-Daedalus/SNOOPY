const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json()); // Middleware to parse JSON bodies

// Route to handle JSON POST requests
app.post('/api/data', (req, res) => {
    console.log('Received data:', req.body);
    res.json({ message: 'Data received successfully!' });
});

// Placeholder route for future video feed
app.post('/api/video', (req, res) => {
    // Implementation for handling video feed will go here
    res.json({ message: 'Video feed received successfully!' });
});

app.listen(PORT, () => {
    console.log(`SNOOPY Server running on port ${PORT}`);
});

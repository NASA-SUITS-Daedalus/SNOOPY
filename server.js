const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json()); // Middleware to parse JSON bodies

// Function to send data to HMD
// Dynamically import node-fetch
async function sendDataToHMD(data) {
    const fetch = (await import('node-fetch')).default;
    const hmdUrl = 'http://hmd-device-ip:port/api/receive'; // Replace with your HMD's listening URL

    fetch(hmdUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => {
        console.log('HMD response:', data);
    })
    .catch((error) => {
        console.error('Error sending to HMD:', error);
    });
}

// Route to handle JSON POST requests
app.post('/api/data', (req, res) => {
    console.log('Received data:', req.body);
    // Call sendDataToHMD when data is received to relay it to HMD
    sendDataToHMD(req.body);
    res.json({ message: 'Data received successfully and relayed to HMD!' });
});

// Placeholder route for future video feed
app.post('/api/video', (req, res) => {
    // Implementation for handling video feed will go here
    res.json({ message: 'Video feed received successfully!' });
});

app.listen(PORT, () => {
    console.log(`SNOOPY Server running on port ${PORT}`);
});

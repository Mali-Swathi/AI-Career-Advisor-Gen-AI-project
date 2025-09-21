require('dotenv').config(); // Add this line at the very top

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path'); // Add this line to handle file paths

const authRoutes = require('./routes/authRoutes');
const testRoutes = require('./routes/testRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());

// Connect to MongoDB
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('MongoDB connected successfully.');
    } catch (err) {
        console.error('MongoDB connection error:', err.message);
        process.exit(1);
    }
};

connectDB();

// Use API routes
app.use('/api/auth', authRoutes);
app.use('/api/test', testRoutes);

// --- New code to serve the React frontend starts here ---
// Serve the static files from the React app's build directory
// This line tells Express to serve files like CSS and JS from your frontend build folder.
app.use(express.static(path.join(__dirname, '..', 'frontend', 'dist')));

// A catch-all route to serve the React app's index.html
// This is essential for React Router to work correctly on different URLs.
// CHANGED FROM app.get TO app.use
app.use('*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'frontend', 'dist', 'index.html'));
});
// --- New code to serve the React frontend ends here ---

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
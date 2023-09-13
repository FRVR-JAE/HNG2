const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const personRoutes = require('./Routes/personRoutes'); // Import your routes

dotenv.config();

const mongoURI = process.env.MONGODB_URI;
const port = process.env.PORT || 8080;

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', (error) => {
  console.error('MongoDB connection error:', error);
});

db.once('open', () => {
  console.log('Connected to MongoDB');
});

db.on('disconnected', () => {
  console.warn('MongoDB disconnected');
});

process.on('SIGINT', () => {
  db.close(() => {
    console.log('MongoDB connection closed due to application termination');
    process.exit(0);
  });
});

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Use your defined routes with the '/api' prefix
app.use('/api', personRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

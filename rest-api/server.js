// server.js

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const personRoutes = require('./Routes/personRoutes');

dotenv.config();

const app = express();
const port = process.env.PORT || 8080;
const mongoURI = process.env.MONGODB_URI;


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

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Use your defined routes with the '/api' prefix
app.use('/', personRoutes); 

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

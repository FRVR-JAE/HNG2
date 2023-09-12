const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');



const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());


// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
const express = require('express');
const router = express.Router();
const personController = require('../controllers/personController');

// Create a new person
router.post('/persons', personController.createPerson);

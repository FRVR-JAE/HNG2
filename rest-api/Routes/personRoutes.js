const express = require('express');
const router = express.Router();
const personController = require('../Controllers/personController');

// Create a new person
router.post('/persons', personController.createPerson);

// Retrieve all persons
router.get('/persons', personController.getAllPersons);

// Update a person by ID
router.put('/persons/:id', personController.updatePerson);

module.exports = router;

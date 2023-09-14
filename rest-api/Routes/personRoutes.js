const express = require('express');
const router = express.Router();
const personController = require('../Controllers/personController');

// Create a new person
router.post('/', personController.createPerson);

// Retrieve all persons
router.get('/', personController.getAllPersons);

// Update a person by ID
router.put('/:id', personController.updatePerson);

// Delete a person by ID
router.delete('/:id', personController.deletePerson);

module.exports = router;

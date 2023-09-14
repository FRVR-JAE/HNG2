const express = require('express');
const router = express.Router();
const personController = require('../Controllers/personController');

// Create a new person
router.post('/api', personController.createPerson);

// Retrieve details of a person by user_id
router.get('/api/:user_id', personController.getPersonById);

// Update details of an existing person by user_id
router.put('/api/:user_id', personController.updatePersonById);

// Remove a person by user_id
router.delete('/api/:user_id', personController.deletePersonById);

module.exports = router;


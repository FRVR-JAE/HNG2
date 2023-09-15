// routes/personRoutes.j
const express = require('express');
const router = express.Router();
const personController = require('../Controllers/personController');

// Create a new person
router.post('/api', personController.createPerson);
// Retrieve details of a person by id
router.get('/api/:id', personController.getPersonById);

// Update person with id
router.put('/api/:id', personController.updatePersonById);

router.delete('/api/:id', personController.deletePersonById);

module.exports = router;

const Person = require('../Models/person.js');

// Create a new person
exports.createPerson = async (req, res) => {
  try {
    const { name, age, email } = req.body;
    const person = new Person({ name, age, email });
    await person.save();
    res.status(201).json(person);
  } catch (error) {
    console.error('Error creating person:', error);
    res.status(500).json({ error: 'An error occurred while creating the person.' });
  }
};

// Retrieve details of a person by user_id
exports.getPersonById = async (req, res) => {
  try {
    const person = await Person.findById(req.params.user_id);
    if (!person) {
      return res.status(404).json({ error: 'Person not found.' });
    }
    res.status(200).json(person);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while retrieving the person.' });
  }
};

// Update details of an existing person by user_id
exports.updatePersonById = async (req, res) => {
  try {
    const { name, age, email } = req.body;
    const person = await Person.findByIdAndUpdate(
      req.params.user_id,
      { name, age, email },
      { new: true }
    );
    if (!person) {
      return res.status(404).json({ error: 'Person not found.' });
    }
    res.status(200).json(person);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while updating the person.' });
  }
};

// Remove a person by user_id
exports.deletePersonById = async (req, res) => {
    try {
      const person = await Person.findByIdAndRemove(req.params.user_id);
      if (!person) {
        return res.status(404).json({ error: 'Person not found.' });
      }
      res.status(204).send(); // Successfully deleted, return a 204 status (No Content)
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while deleting the person.' });
    }
};

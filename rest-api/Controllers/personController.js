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

// Retrieve all persons
exports.getAllPersons = async (req, res) => {
  try {
    const persons = await Person.find();
    res.status(200).json(persons);
  } catch (error) {
    console.error('Error retrieving persons:', error);
    res.status(500).json({ error: 'An error occurred while retrieving persons.' });
  }
};

// Update a person by ID
exports.updatePerson = async (req, res) => {
  try {
    const { name, age, email } = req.body;
    const person = await Person.findByIdAndUpdate(
      req.params.id,
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

// Delete a person by ID
exports.deletePerson = async (req, res) => {
    try {
      const person = await Person.findByIdAndRemove(req.params.id);
      if (!person) {
        return res.status(404).json({ error: 'Person not found.' });
      }
      res.status(204).send(); // Successfully deleted, return a 204 status (No Content)
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while deleting the person.' });
    }
  };

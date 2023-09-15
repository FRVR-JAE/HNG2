const Person = require('../Models/person.js');

// Create a new person
const createPerson = async (req, res) => {
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
const getPersonById = async (req, res) => {
  try {
    const person = await Person.findById(req.params.id);
    if (!person) {
      return res.status(404).json({ error: 'Person not found.' });
    }
    res.status(200).json(person);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while retrieving the person.' });
  }
};

const updatePersonById = async (req, res) => {
  try {
    const { name, age, email } = req.body;
    const person = await Person.findByIdAndUpdate(
      req.params.id, // Use req.params.id to get the 'id' parameter from the route
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
const deletePersonById = async (req, res) => {
  try {
    const person = await Person.findByIdAndRemove(req.params.id); // Use req.params.id
    if (!person) {
      return res.status(404).json({ error: 'Person not found.' });
    }
    res.status(204).send(); // Successfully deleted, return a 204 status (No Content)
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while deleting the person.' });
  }
};


module.exports = {
  createPerson,
  getPersonById,
  updatePersonById,
  deletePersonById,
};

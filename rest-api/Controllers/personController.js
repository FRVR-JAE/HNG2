const Person = require('../Models/person.js');

// Create a new person
exports.createPerson = async (req, res) => {
  try {
    const { name, age, email } = req.body;
    const person = new Person({ name, age, email });
    await person.save();
    res.status(201).json(person);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while creating the person.' });
  }
};
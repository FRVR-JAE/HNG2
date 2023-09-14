hngx-stage2
This guide will walk you through setting up and using a simple Express.js REST API with MongoDB for CRUD operations on a "person" resource.

Table of Contents
Prerequisites
Installation
Configuration
Running Locally
Testing
API Endpoints
Prerequisites
Before getting started, ensure you have the following installed on your system:

Node.js: Download and Install Node.js
MongoDB: Download and Install MongoDB
Installation
Clone this repository:

git clone <repository-url>
cd <repository-folder>
Install Dependencies

npm install
Configuration
Create a .env file in the root directory of your project and add the following:

MONGO_URI=<your-mongodb-connection-string>
PORT=<your-preferred-port>
Running Locally
To run the Express API locally, use the following command:

 npm start
Testing
To Test, use the following command:

 npm test
API Endpoints
Create a New Person
Endpoint: POST /api/persons
Request Body: JSON with person data (name, age, email)
Response: JSON with the created person data


Retrieve All Persons
Endpoint: GET /api/persons
Response: JSON array of all persons


Retrieve a Person by ID
Endpoint: GET /api/persons/:id
Response: JSON with the details of the specified person


Update a Person by ID
Endpoint: PUT /api/persons/:id
Request Body: JSON with updated person data (name, age, email)
Response: JSON with the updated person data


Delete a Person by ID
Endpoint: DELETE /api/persons/:id
Response: No content (204 status code) if successful
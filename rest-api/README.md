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
base url : https://alex-hngx-stage2.onrender.com

Create a New Person
Create a new person by sending a POST request to /api with a JSON body containing the person's name.

Request
POST /api
Content-Type: application/json

{
  "name": "John Doe"
}
Response
{
 "_id": "5fbd6a53a2b65d00173b9a1f",
  "name": "John Doe",
}
To Retrieve a person with ID
Retrieve a person's details by sending a GET request to /api/:id, where :id is the person's unique identifier.

Request
GET /api/5fbd6a53a2b65d00173b9a1f
Response
{
  "_id": "5fbd6a53a2b65d00173b9a1f",
  "name": "John Doe",

}
Update a Person by ID
Update a person's details by sending a PUT request to /api/:id, where :id is the person's unique identifier. Provide a JSON body containing the updated name.

Request
PUT /api/5fbd6a53a2b65d00173b9a1f Content-Type: application/json

{ "name": "Updated Name" }

Response
{
  "_id": "5fbd6a53a2b65d00173b9a1f",
  "name": "Updated Name",
}
Delete a Person by ID
Remove a person by sending a DELETE request to /api/:id, where :id is the person's unique identifier

Request
DELETE /api/5fbd6a53a2b65d00173b9a1f

Response
{
  "message": "Person deleted"
}
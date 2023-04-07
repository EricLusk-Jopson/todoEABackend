# Instructions for running locally

1. Create a todoEA folder on your machine

2. Clone the backend repo into todoEA

3. Clone the frontend repo into todoEA

Repos can be found here:
backend: https://github.com/EricLusk-Jopson/todoEABackend.git
frontend: https://github.com/EricLusk-Jopson/todoEAFrontend.git

4. add a .env file to the backend folder and paste the following code:

   MONGO_URI = mongodb+srv://todoUser:i0RsosxG3dEYHZcQ@todoeadb.pfj8blh.mongodb.net/todoeadb?retryWrites=true&w=majority

   save the .env file

   Note that normally I would NOT share secrets or credentials this way. My preference would be to have you contact me directly to obtain this information but I am dealing with an agency and don't feel direct communication will be prompt enough for me to remain competitive in the process.

5. if you haven't already, cd into the todoEA/backend folder and run

   npm start

   This will connect to MongoDB using the environment variable you copied to your .env file and then load the server on http://localhost:3001

6. cd into the todoEA/frontend folder and run

   npm start

   This will load the SPA react app for the frontend

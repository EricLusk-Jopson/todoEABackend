# Instructions for running locally

1. Create a todoEA folder on your machine

2. cd into todoEA

3. run the following two commands

   git clone https://github.com/EricLusk-Jopson/todoEABackend.git

   git clone https://github.com/EricLusk-Jopson/todoEAFrontend.git

4. cd into todoEABackend and add a .env file to the backend folder. Paste the Mongo uri provided via email.

5. if you haven't already, cd into the todoEA/backend folder and run

   npm install
   npm start

   This will connect to MongoDB using the environment variable you copied to your .env file and then load the server on http://localhost:3001
   Make sure that nothing else is already running on port 3001

6. open a new terminal and cd into the todoEA/frontend folder. Run the following commands:

   npm install
   npm start

   This will load the SPA react app for the frontend

# Instructions for running locally

1. Create a todoEA folder on your machine

2. cd into todoEA

3. run the following two commands
   git clone https://github.com/EricLusk-Jopson/todoEABackend.git
   git clone https://github.com/EricLusk-Jopson/todoEAFrontend.git

4. cd into todoEABackend and add a .env file to the backend folder. Paste the following code:

   MONGO_URI = mongodb+srv://todoUser:i0RsosxG3dEYHZcQ@todoeadb.pfj8blh.mongodb.net/todoeadb?retryWrites=true&w=majority

   save the .env file

   Note that normally I would NOT share secrets or credentials this way. My preference would be to have you contact me directly to obtain this information but I am dealing with an agency and don't feel direct communication will be prompt enough for me to remain competitive in the process.

5. if you haven't already, cd into the todoEA/backend folder and run

   npm install
   npm start

   This will connect to MongoDB using the environment variable you copied to your .env file and then load the server on http://localhost:3001
   Make sure that nothing else is already running on port 3001

6. open a new terminal and cd into the todoEA/frontend folder. Run the following commands:

   npm install
   npm start

   This will load the SPA react app for the frontend

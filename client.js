const axios = require("axios");
const URL = "http://localhost:3000";

const welcomeMessage = async () => {
  try {
    const res = await axios.get(`${URL}/`);
    const message = res.data;

    console.log(message);
  } catch (err) {
    console.log(err);
  }
};

// NOTICE: most those tasks require changes to server.js (backend) as well

// TASK: request all characters

// TASK: request one character using id

// TASK request all character of a specific house

// TASK request all fights between houses

// TASK request the future age of characters, passing the number of years from now

// Run 'node client.js' to execute these functions
welcomeMessage();

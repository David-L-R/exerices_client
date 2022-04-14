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
const getUsers = async () => {
  try {
    // geting the characters takes time => we need await
    const res = await axios.get(`${URL}/characters`);

    // backend => characters [{...}, {...}]
    // axios => { data: characters}

    const characters = res.data;

    console.log(characters);
  } catch (err) {
    console.log(err);
  }
};

// TASK: request one character using id
const getUser = async (id) => {
  try {
    const res = await axios.get(`${URL}/characters/${id}`);
    const character = res.data;
    console.log(character);
  } catch (err) {
    console.log(err.response.data);
  }
};

// TASK request all characters of a specific house
const getUsersByHouse = async (house) => {
  try {
    const res = await axios.get(`${URL}/house/${house}`);
    const characters = res.data;
    console.log(characters);
  } catch (err) {
    console.log(err.response.data);
  }
};

const getFuture = async (years) => {
  try {
    const res = await axios.get(`${URL}/future/${years}`);
    const future = res.data;
    console.log(future);
  } catch (err) {
    console.log(err.response.data);
  }
};

// TASK request the future age of characters, passing the number of years from now

// Run 'node client.js' to execute these functions
// welcomeMessage();
// getUsers();
// getUser(1262121321);
// getUsersByHouse("StarK");
// getUsersByHouse("StarKdkasjdksaj");
getFuture(10);

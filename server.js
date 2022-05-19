const express = require("express");
const characters = require("./characters.json");
const houses = [
  "Stark",
  "Arryn",
  "Baratheon",
  "Greyjoy",
  "Lannister",
  "Martell",
];
const app = express();

// GET all characters
app.get("/characters", (req, res) => {
  res.send(characters);
});

// GET find character by id
app.get("/characters/:id", (req, res) => {
  const { id } = req.params;

  // TASK: SOLVE BUG: no user is found!
  const character = characters.find((character) => character.id === id);

  // BONUS TASK: send an error if no user was found

  res.send(character);
});

// GET filter character by house
app.get("/house/:name", (req, res) => {
  const { id } = req.params;

  // TASK: filter users by house

  // TASK: users should be found even if we type the house name with different cases
  // so "Stark" or "STArk" or "STARK" or "strak" should be the same :)

  // BONUS TASK: send an error if there are no users

  // BONUS TASK: 💪 check if house given is in the list of houses
  // If it is not in the list, send an error saying: "incorrect house name"
  // The house list is on top

  res.send(character);
});

// GET fights between houses
app.get("/fights", (req, res) => {
  // TASK: return a list of objects that contain:
  // { house , fighting }
});

// BONUS!!!
// GET characters age in ... years
// this should check if the character is alive
// if it is alive, add the years to its age
// send back characters with the updated age
app.get("/future/:years", (req, res) => {});

PORT = 3000;
app.listen(PORT, () => console.log(`server is running on port ${PORT}`));

const express = require("express");
const { send } = require("express/lib/response");
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

// GET hello player
app.get("/", (req, res) => {
  res.send("Welcome to Game of Thrones");
});

// GET all characters
app.get("/characters", (req, res) => {
  res.send(characters);
});

// GET find character by id
app.get("/characters/:id", (req, res) => {
  const { id } = req.params;
  const character = characters.find((character) => {
    return character.id === parseInt(id);
  });

  if (!character) {
    res.status(400).send({ error: "character was not found" });
    return;
  }

  res.send(character);
});

// GET filter character by house
app.get("/house/:name", (req, res) => {
  const { name } = req.params;

  // Stark
  // STArk
  // STarK

  // string.lowercase()
  // strak

  // BONUS TASK: check if house given is in the list of houses
  // If it is not in the list, send an error saying: "incorrect house name"
  // The house list is on top

  // this check should be first! before we waste time filtering

  // 1. if (house is not in the list)
  // 2. if not, then send error
  // 3. break the function (return)

  // find index will give back the index of the string
  // if the string is NOT inside the array, we will get back -1
  const indexOfHouse = houses.findIndex((house) => {
    return house.toLowerCase() === name.toLowerCase();
  });

  // the house is not in the list
  if (indexOfHouse > -1) {
    res.status(400).send({ error: "house is not in the list" });
    return;
  }

  // TASK: filter users by house
  // TASK: users should be found even if we type the house name with different cases
  // so "Stark" or "STArk" or "STARK" or "strak" should be the same :)

  const houseCharacters = characters.filter(
    (character) => character.house.toLowerCase() === name.toLowerCase()
  );

  // BONUS TASK: send an error if there are no users
  // if no characters => []
  // [] truthy
  if (characters.length === 0) {
    res.status(400).send({ error: "characters were not found" });
    return;
  }

  res.send(houseCharacters);
});

// BONUS!!!
// GET characters age in ... years
// this should check if the character is alive
// if it is alive, add the years to its age
// send back characters with the updated age
app.get("/future/:years", (req, res) => {
  // how many years to add?
  // we need to go over the list, and check if alive
  // if alive - age + years
  // if dead - don't change

  const { years } = req.params;

  const futureCharacters = characters.map((character) => {
    if (character.isAlive) {
      const aliveCharacter = {
        ...character,
        age: character.age + parseInt(years),
      };
      return aliveCharacter;
    }
    return character; // if not alive, don't change anything!
  });

  res.send(futureCharacters);
});

PORT = 3000;
app.listen(PORT, () => console.log(`server is running on port ${PORT}`));

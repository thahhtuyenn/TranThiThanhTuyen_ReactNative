const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

let players1 = game.players[0];
let players2 = game.players[1];

let gk = players1[0];
let fieldPlayers = players1.slice(1);
let allPlayers = [...players1, ...players2];
let players1Final = [...players1, "Thiago", "Coutinho", "Perisic"];
let { team1, x: draw, team2 } = game.odds;
let printGoals = function ([...players]) {
  for (let i = 0; i < players.length; i++) {
    if (
      players[i] === "Lewandowski" ||
      players[i] === "Gnarby" ||
      players[i] === "Hummels"
    ) {
      if (players[i] === "Lewandowski") {
        console.log(`Goal ${i + 1}: ${players[i]}`);
      }
    }
  }
};

console.log("1. Team1' GK: ", gk);
console.log("2. Team1's remaining", fieldPlayers);
console.log("3. All players: ", allPlayers);
console.log("4. Players 1 final: ", players1Final);
console.log(
  `5. Odd of victory team1: ${team1}, Odd of draw: ${draw}, Odd of victory team2: ${team2}`
);
printGoals(...game.scored);
console.log("6. ", game.scored);

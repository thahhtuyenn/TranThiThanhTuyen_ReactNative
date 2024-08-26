const gameEvents = new Map([
  [17, "⚽ GOAL"],
  [36, "� Substitution"],
  [47, "⚽ GOAL"],
  [61, "� Substitution"],
  [64, "� Yellow card"],
  [69, "� Red card"],
  [70, "� Substitution"],
  [72, "� Substitution"],
  [76, "⚽ GOAL"],
  [80, "⚽ GOAL"],
  [92, "� Yellow card"],
]);

// 1. Create an array 'events' of the different game events that happened (no duplicates)
console.log("Challenge 03 - Part 1");
let events = [...new Set(gameEvents.values())];
console.log("events:", events);

// 2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
console.log("Challenge 03 - Part 2");
gameEvents.delete(64);
console.log("gameEvents:", gameEvents);

// 3. Print the following string: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
console.log("Challenge 03 - Part 3");
console.log(
  `An event happened, on average, every ${90 / gameEvents.size} minutes`
);

// 4. Loop over 'gameEvents' and log each element to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
console.log("Challenge 03 - Part 4");
for (const [minute, event] of gameEvents) {
  console.log(
    `[${minute <= 45 ? "FIRST" : "SECOND"} HALF] ${minute}: ${event}`
  );
}

const string = "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of light, it was the season of darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to heaven, we were all going direct the other way...";
console.log(string);

console.log(`The phrase "it was the epoch of belief" occurs at the index of: ${string.indexOf("it was the epoch of belief")}.`);

console.log(`Slicing the phrase between index 0 and 109 produces: ${string.slice(0, 109)}`);

console.log(`Whether the phrase contains the word "turtles" is: ${string.includes("turtles")}`);
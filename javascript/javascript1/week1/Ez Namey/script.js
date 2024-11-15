const firstWords = ["Easy", "Amazing", "Corporate", "Unique", "Beautiful", "Masive", "Ordinary", "New", "Old", "Soft"];

const similarWords = ["Simple", "Awesome", "Business", "Special", "Elegant", "Huge", "Common", "Fresh", "Ancient", "Smooth"];

const randomNumber = Math.floor(Math.random() * 10);
const randomNumber2 = Math.floor(Math.random() * 10);

let startupName =  firstWords[randomNumber] + " " + similarWords[randomNumber2];

console.log(startupName);



// Ez Namey (Startup name generator) Optional
// At a meetup you overhear a conversation between two developers. It went something like this: "Man i wish picking a startup name was easier! You need to be creative, funny and interesting, its nearly impossible!" Another problem to solve, awesome!

// Lets help people who struggle finding a startup name by creating some code!

// Create two arrays called firstWords, secondWords. The arrays should have 10 elements containing strings of possible startup names. Some examples could be: "Easy", "Awesome", "Corporate".

// Create a variable called startupName that will contain the created startup name.

// Using a random index (you choose) of the arrays and concatenation of strings, create and log the new startup name and the number of characters in it. An example could be: "The startup: "Easy Corporation" contains 16 characters"

// Hint: you can use this code to generate a random number from 0-9, if you dont want to specify the indexes yourself.

// const randomNumber = Math.floor(Math.random() * 10);
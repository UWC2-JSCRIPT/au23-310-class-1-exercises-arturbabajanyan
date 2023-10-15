/**
 * MATH
 */

// 1. Pagliacci charges $16.99 for a 13” pizza and $19.99 for a 17” pizza.
// What is the area for each of these pizzas?
// (radius would be the listed size - i.e. 13" - divided by 2)
// A = P * r^2
const smallPizza = 13;
const largePizza = 17;
const smallPizzaArea = Math.round(Math.PI * (smallPizza/2) ** 2);
const largePizzaArea = Math.round(Math.PI * (largePizza/2) ** 2);
console.log(`Small Pizza Area is ${smallPizzaArea}, Large Pizza Area is ${largePizzaArea}`)

// 2. What is the cost per square inch of each pizza?
const costPerInchSmall = (16.99 / smallPizzaArea).toFixed(2);
const costPerInchLarge = (19.99 / largePizzaArea).toFixed(2);
console.log(`Cost per inch for small pizza is ${costPerInchSmall}. Cost per inch for large pizza is ${costPerInchLarge}`)

// 3. Using the Math object, put together a code snippet
// that allows you to draw a random card with a value
// between 1 and 13 (assume ace is 1, jack is 11…)
Math.floor(Math.random() * 13) + 1;
console.log(`This is a random number between 1 to 13: ${Math.floor(Math.random() * 13) + 1}`)

// 4. Draw 3 cards and use Math to determine the highest
// card
let card1 = Math.floor(Math.random() * 13) + 1;
let card2 = Math.floor(Math.random() * 13) + 1;
let card3 = Math.floor(Math.random() * 13) + 1;
let highestCard;
highestCard = Math.max(card1, card2, card3);
console.log(`Drawn card are ${card1}, ${card2}, ${card3}, highest card is ${highestCard}`)

/**
 * ADDRESS LINE
 */

// 1. Create variables for firstName, lastName,
// streetAddress, city, state, and zipCode. Use
// this information to create a formatted address block
// that could be printed onto an envelope.
let firstName = "Matt";
let lastName = "Schneider";
let address = "1234 5th Ave";
let city = "Seattle";
let state = "Washington";
let zipCode = "12345";
fullAddress = firstName + " " + lastName + "\n" + address + "\n" + city + ", " + state + " " + zipCode;
console.log(`Full address for print will be\n${fullAddress}.`)

// 2. You are given a string in this format:
// firstName lastName(assume no spaces in either)
// streetAddress
// city, state zip(could be spaces in city and state)
// 
// Write code that is able to extract the first name from this string into a variable.
// Hint: use indexOf, slice, and / or substring
let firstNameLength = firstName.length;
let firstNameIndex = fullAddress.indexOf(firstName);
let firstNameOutOfAddress = fullAddress.substring(firstNameIndex, (firstNameIndex + firstNameLength));
console.log(`First name from out of the address will be: ${firstNameOutOfAddress}.`)

/**
 * FIND THE MIDDLE DATE
 */
// On your own find the middle date(and time) between the following two dates:
// 1/1/2020 00:00:00 and 4/1/2020 00:00:00
//
// Look online for documentation on Date objects.

// Starting hint:
//const endDate = new Date(2019, 3, 1);
 
const startDate = new Date(2020, 0, 1);
const endDate = new Date(2022, 3, 1);
const midTime = (startDate.getTime() + endDate.getTime()) / 2;
const midDate = new Date(midTime);
console.log(`Mid date will be\n${midDate}`);
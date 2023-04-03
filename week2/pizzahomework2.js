// Open the new homework directory in VS Code and create a new JavaScript file - name it something that indicates it is homework for Week 2
// Inside your JS file, create two variables: pizzaPlace and numberOfToppings
let pizzaPlace;
let numberOfToppings;
// Have the variables reference the name of your Pizza Place and the number of toppings your Pizza Place offers.
pizzaPlace = "NiceSlice";
numberOfToppings = 8;
// Print the variables and their types.
//console.log(typeof pizzaPlace + numberOfToppings);
// Print a template literal that uses both variables to construct a short sentence about your Pizza Place.
console.log(`My favorite pizza place is ${pizzaPlace} because they have ${numberOfToppings} toppings`);
// Construct an if statement that prints "Quality, not quantity." if you offer less than 10 toppings, or "A whole lot of pizza." if you offer 10 or more toppings.
 if (numberOfToppings<10) {
  console.log("Quality, not quantity.")
 } else if (numberOfToppings>10) { console.log("A whole lot of pizza.")
 };
// Add, commit, and push your JS file to your GitHub repo.
// Send your TA a link to your GitHub Homework repo when finished.

// // <!-- Add a "Week 3 Homework" file to your homework repo
// // Pizza Place Functions -->
// // Create an array of pizzaToppings with at least four different toppings
const pizzaToppings = [
  "pepperoni ",
  "mushrooms ",
  "olives ",
  "bacon"
];
// // Create a greetCustomer function that prints a message that welcomes a guest, then informs them of the available toppings by looping over pizzaToppings (don't worry about perfect grammar here yet, i.e. "a, b, and c", see Bonus Challenge #9)
// // i.e. "Welcome to Pizza House, our toppings are: a, b, c, ..."

//

function greetCustomer() {
let greeting = "Welcome to Nice Slice! Our pizza toppings are ";
for (let topping of pizzaToppings) {
  greeting += `${topping}`};
console.log(greeting);
}


// Welcome to Nice Slice! Our pizza toppings are pepperoni mushrooms olives bacon

function getPizzaOrder(size, crust, ...toppings) {
  console.log(`One ${size} ${crust} pizza with ${toppings} coming up!`);
}
getPizzaOrder("small", "handtossed"," pepperoni"," mushrooms"," and olives");

// Welcome to Nice Slice! Our pizza toppings are pepperoni mushrooms olives bacon
// One small handtossed pizza with  pepperoni, mushrooms, and olives coming up!

function preparePizza([size, crust, ...toppings]) {
  console.log("...Cooking pizza...");
  return {
    size: size,
    crust: crust,
    toppings: toppings
  };
}


// // Create a servePizza function that

function servePizza(pizza) {
  console.log(`${pizza.size} ${pizza.crust} ${pizza.toppings} is ready`);
  return pizza;
}

// // has a parameter of a pizza Object
// // logs a message that the pizza is ready and repeats the order, i.e. "Order up! Here's your large thick crust pizza with x, y, z, ... Enjoy!"
// // outputs the same pizza Object that was passed in
// // Call each function and (starting with preparePizza) use the returned value from the previous function as its input
// // Add, commit, and push your JS file to your GitHub repo.
// // Send your TA a link to your GitHub Homework repo when finished.

// // An example output for this assignment is:

// // Welcome to The Pizza House, our toppings are: pepperoni, sausage, onions, peppers, One large thin crust pizza with sausage, onions, peppers, . Coming up! ...your pizza is cooking... Order up! Here's your large thin crust pizza with sausage, onions, peppers, . Enjoy!

greetCustomer();
let pizzaOrder = ("small","handtossed", "pepperoni", "mushrooms", "olives");
let prepPizza = preparePizza(pizzaOrder);
servePizza(prepPizza);

servePizza(preparePizza(getPizzaOrder("small","handtossed", "pepperoni", "mushrooms", "olives")));

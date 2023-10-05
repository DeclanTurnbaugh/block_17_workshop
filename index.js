const coffeeMenu = require("./coffee_data.js");
let allDrinks = "The drinks are: ";
let drinksUnder5 = "Our drinks for $5 or under are: ";
let drinksUnder5Array = [];
let evenDrinks = "The even drinks are: ";
let evenDrinksArray = [];
let totalCost = 0;
let seasonalDrinks = "Our seasonal drinks are: ";
let seasonalDrinksArray = [];

// Printing all drinks
coffeeMenu.forEach((element, index) => {
  if (index === coffeeMenu.length - 1) return (allDrinks += `${element.name}.`);
  if (index === coffeeMenu.length - 2)
    return (allDrinks += `${element.name} and `);
  return (allDrinks += `${element.name}, `);
});

// Printing drinks under $5
coffeeMenu.forEach((element) => {
  if (element.price <= 5) return drinksUnder5Array.push(element.name);
});

drinksUnder5Array.forEach((element, index) => {
  if (index === drinksUnder5Array.length - 1)
    return (drinksUnder5 += `${element}.`);
  if (index === drinksUnder5Array.length - 2)
    return (drinksUnder5 += `${element} and `);
  return (drinksUnder5 += `${element}, `);
});

// Printing all even drinks
coffeeMenu.forEach((element) => {
  if (element.price % 2 === 0) return evenDrinksArray.push(element.name);
});

evenDrinksArray.forEach((element, index) => {
  if (index === evenDrinksArray.length - 1)
    return (evenDrinks += `${element}.`);
  if (index === evenDrinksArray.length - 2)
    return (evenDrinks += `${element} and `);
  return (evenDrinks += `${element}, `);
});

// Printing total cost
coffeeMenu.forEach((element) => (totalCost += element.price));

// Printing seasonal drinks
coffeeMenu.forEach((element) => {
  if (element.seasonal)
    return seasonalDrinksArray.push(element.name + " with imported beans");
});

seasonalDrinksArray.forEach((element, index) => {
  if (index === seasonalDrinksArray.length - 1)
    return (seasonalDrinks += `${element}.`);
  if (index === seasonalDrinksArray.length - 2)
    return (seasonalDrinks += `${element} and `);
  return (seasonalDrinks += `${element}, `);
});

console.log(allDrinks);
console.log(drinksUnder5);
console.log(evenDrinks);
console.log(`The total cost of all drinks is $${totalCost}!`);
console.log(seasonalDrinks);

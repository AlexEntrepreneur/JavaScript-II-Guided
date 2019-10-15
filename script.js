//====== Lexical Scope & Closure ======//
// Scope
globalVar = 'Some global var';

function localScope() {
  const localVariable = 'Some local variable';
  console.log(localVariable);
}

// console.log(localVariable);

// Closure
// Function is a closure
// Functions have access to vars defined outside of it
function closureExample() {
  console.log(globalVar);
}

// UN -> US -> California
// World => Kingdom => City => Town
let totalPopulation = '2bn';

const kingdom = () => {
  const queen = 'Queen Ruby';
  console.log(`Long live ${queen}`);

  const city = () => {
    const mayor = 'Mayor Jim';
    console.log(`${queen} demands more taxes!`);

    const town = () => {
      // Overwriting queen var
      // const queen = 'Local Queen';
      const townCrier = 'Crier Tom';
      console.log(`${townCrier} has a message for the town: ${queen} demands more taxes! And ${mayor} demands half of your crops`);
    }
    town();
  }
  city();
}

kingdom();

//====== Higher Order Functions ======//
// Function that takes/returns other functions

// Callbacks
// Function that is to be called after another function has finished executing
function compute(num1, num2, cb) {
  return cb(num1, num2);
}

const add = (a, b) => {
  return a + b;
}

// Blake
const multiply = (a, b) => {
  return a * b;
}

// Ken
const divide = (a, b) => a / b;

console.log(compute(543, 234, add));
console.log(compute(21, 45, multiply)); 
console.log(compute(21, 5, divide)); 



//====== Array Methods ======//
const cityData = [
  { "city": "Seattle", "state": "WA", "population": 652405, "land_area": 83.9 },
  { "city": "New york", "state": "NY", "population": 8405837, "land_area": 302.6 },
  { "city": "Boston", "state": "MA", "population": 645966, "land_area": 48.3 },
  { "city": "Kansas city", "state": "MO", "population": 467007, "land_area": 315 },
  { "city": "London", "state": "N/A", "population": 8136000, "land_area": 607 }
];

// Filter
// Returns a brand NEW filtered array
// Selects a subset of array items
// Return true = keep item
// Return false = discard item
let filteredCities = cityData.filter(function (currentItem, i) {
  return currentItem.population > 650000;
});

let bigCities = cityData.filter((currentItem) => {
  return currentItem.land_area > 50;
});

console.log(filteredCities);
console.log(bigCities);

// Map
// Returns NEW transformed array
// Array remains the same length
// DONT FORGET THE RETURN KEYWORD
const lowerCaseCities = cityData.map((currentItem, index, array) => {
  currentItem.city = currentItem.city.toLowerCase();
  // Return the transformed item
  return currentItem;
});

console.log(lowerCaseCities);


// For Each

// Reduce

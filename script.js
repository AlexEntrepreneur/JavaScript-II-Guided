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

//====== Higher Order Functions ======//


//====== Array Methods ======//
const cityData = [
  { "city": "Seattle", "state": "WA", "population": 652405, "land_area": 83.9 },
  { "city": "New york", "state": "NY", "population": 8405837, "land_area": 302.6 },
  { "city": "Boston", "state": "MA", "population": 645966, "land_area": 48.3 },
  { "city": "Kansas city", "state": "MO", "population": 467007, "land_area": 315 }
];

// Filter

// Map

// For Each

// Reduce

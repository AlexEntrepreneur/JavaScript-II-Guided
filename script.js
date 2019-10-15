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
function compute(param1, param2, callbackFunction) {
  return callbackFunction(param1, param2);
}

function add(a, b) {
  return a + b;
}

console.log(compute(543, 234, add));



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

//====== Lexical Scope & Closure ======//
// SCOPE
const globalVar = 'some global variable';

function localScope() {
  const localVar = 'some local variable';
}

// console.log(localVar);

localScope();

// CLOSURE
function outerFunction() {
  const outerVar = 'some outer variable';

  function closureExample() {
    const closureVar = 'some inner variable';

    console.log(closureVar);
    console.log(outerVar);
    console.log(globalVar);
  }
  closureExample();
}

outerFunction();

// UN -> USA -> California
// World => Kingdom => City => Town
let totalPopulation = '2bn';

const kingdom = () => {
  const queen = 'Queen Ruby';
  console.log(`Long live ${queen}!`);
  // console.log(totalPopulation);
  
  const city = () => {
    const mayor = 'Mayor Jim';
    console.log(`${queen} demands more taxes!`);

    const town = () => {
      // Overwriting queen var
      // const queen = 'Local Queen';
      const townCrier = 'Crier Tom';
      console.log(
        `${townCrier} has a message for the town: ${queen} demands more taxes! ${mayor} demands half of your crops!`
      );
    }

    town();
  }

  city();
}

kingdom();

// Zakaria
const heros = () => {
  const batman = "Batman";
  console.log(`I'm the ${batman}`);
  
  const avengers = () => {
    const ironMan = "Dead meat";
    console.log(`${batman} won't save you ${ironMan}`)
  }
  avengers();
}

heros();

// Amin
const footballClub = () => {
  const chairman = "Fat Cat";
  console.log(`${chairman} is here to invest in the football club!`);
  const coachingStaff = () => {
    const manager = `The best football manager`;
    console.log(
      `${manager} now has plenty of money to spend on improving the squad!`
    );
    const playingSquad = () => {
      const player = "Big Shot";
      const fans = "people";
      console.log(
        `${player} has has just signed a new ${player} to bring home all the trophies and make the ${fans} happy!`
      );
      console.log(chairman, manager);
    };
    playingSquad();
  };
  coachingStaff();
};
footballClub();


//====== Higher Order Functions ======//
// Function that takes/returns other functions

// Callbacks

function compute(num1, num2, cb) {
  // Run some other other code first
  console.log('computing value...');
  
  return cb(num1, num2);
}

const add = (a, b) => {
  return a + b;
}

 const multiply = (a, b) => {
  return a * b;
}

function processArray(array, cb) {
  return cb(array);
}

const sortArray = (arr) => {
  return arr.sort((a, b) => {
    if (a > b) {
      return 1;
    } else if (b > a) {
      return -1;
    }
    return 0;
  });
}

// 1. Create a HOF called processSum that takes an array & callback as args
// 2. Create a callback that returns the sum of all numbers within the array

// Austin
function processSum(arr, cb) {
  return cb(arr);
}

function sumItems(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


console.log(compute(543, 321, add));
console.log(compute(543, 321, multiply));
console.log(processArray([543, 321, 9087, 980], sortArray));
console.log(processSum(nums, sumItems));


//====== Array Methods ======//
const cityData = [
  { city: "Seattle", state: "WA", population: 652405, land_area: 83.9 },
  { city: "New york", state: "NY", population: 8405837, land_area: 302.6 },
  { city: "Boston", state: "MA", population: 645966, land_area: 48.3 },
  { city: "Kansas city", state: "MO", population: 467007, land_area: 315 },
  { city: "London", state: "N/A", population: 8899375, land_area: 607 }
];

// FILTER
// Returns a brand NEW filtered array
// Selects a subset of items
// Criteria return true = keep item
// Criteria return false = discard item

const filteredCities = cityData.filter((currentItem, index, array) => {
  return currentItem.population > 650000;
});

console.log(filteredCities);



// MAP

// REDUCE

// FOREACH




// Why are array methods important?
  // They don't mutate the existing array
  // Array Methods are "functional"
  // Functional = uses HOF & Callbacks
    // Cleaner, shorter, easier to understand + more abstract
  // For loops = Imperative
  // Imperative = every step defined in literal detail
    // More performant
    // Harder to understand + less abstract
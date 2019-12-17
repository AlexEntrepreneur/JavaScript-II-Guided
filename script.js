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
      const queen = 'Local Queen';
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

//====== Higher Order Functions ======//


//====== Array Methods ======//
const cityData = [
  { "city": "Seattle", "state": "WA", "population": 652405, "land_area": 83.9 },
  { "city": "New york", "state": "NY", "population": 8405837, "land_area": 302.6 },
  { "city": "Boston", "state": "MA", "population": 645966, "land_area": 48.3 },
  { "city": "Kansas city", "state": "MO", "population": 467007, "land_area": 315 }
];

// FILTER

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
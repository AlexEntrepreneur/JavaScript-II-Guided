//====== Lexical Scope & Closure ======//
// The World: (Global)
let totalPopulation = "2bn";

function kingdom() {
  const queen = "Queen Ruby";
  console.log(`Long live ${queen}`);

  function city() {
    const mayor = "Mayor Jim";
    console.log(`${queen} demands more taxes!`);

    function town() {
      const townCrier = "Crier Tom";
      console.log(`${townCrier} has a message for the town: ${queen} demands more taxes! And ${mayor} demands half of your crops!`);
    }
    town();
  }
  city();
}

kingdom();


//====== Higher Order Functions ======//
function compute(param1, param2, callbackFunction) {
  return callbackFunction(param1, param2);
}

// callbacks
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

console.log(compute(2, 5, add));
console.log(compute(543, 23, multiply));
console.log(compute(32, 16, subtract));

//====== Array Methods ======//
const cityData = [
  { "city": "Seattle", "state": "WA", "population": 652405, "land_area": 83.9 },
  { "city": "New york", "state": "NY", "population": 8405837, "land_area": 302.6 },
  { "city": "Boston", "state": "MA", "population": 645966, "land_area": 48.3 },
  { "city": "Kansas city", "state": "MO", "population": 467007, "land_area": 315 }
];

// filter
let filteredCities = cityData.filter(function (currentItem) {
  return currentItem.population > 650000;
});

console.log(filteredCities);

// Map
const lowerCaseCity = cityData.map(currentItem => currentItem.city.toLowerCase());

console.log(lowerCaseCity);

// forEach
const populationDoom = [];

cityData.forEach(function (currentItem) {
  currentItem.population = 0;
  populationDoom.push(currentItem);
});

console.log(populationDoom);

// Reduce
const totalCityLandArea = cityData.reduce((acc, city) => {
  return acc + city.land_area;
}, 0);

console.log(totalCityLandArea);

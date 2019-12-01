const fs = require('fs');

const data = fs.readFileSync('./input.txt', 'utf-8');
const inputs = data.split('\n');


// Part 1

const findFuel = (mass) => Math.floor(mass / 3) - 2;
// const finalFuel = inputs.reduce((acc, input) => acc + findFuel(parseFloat(input)), 0);


// Part 2

const findFuelForFuel = (fuel) => {
    let sum = 0;
    while (fuel > 0) {
        fuel = findFuel(fuel);
        sum += fuel >= 0 ? fuel : 0;
    }
    return sum;
}

const finalFuelRequired = inputs.reduce((acc, input) => acc + findFuelForFuel(parseInt(input)), 0);
console.log(finalFuelRequired);
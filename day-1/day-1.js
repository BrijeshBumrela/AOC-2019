const fs = require('fs');

const data = fs.readFileSync('./input.txt', 'utf-8');


const inputs = data.split('\n');
const findFuel = (mass) => Math.floor(mass / 3) - 2;
const finalFuel = inputs.reduce((acc, input) => acc + findFuel(parseInt(input)), 0);

console.log(finalFuel);
const fs = require('fs');

const data = fs.readFileSync('./input.txt', 'utf-8');
let inputs = data.split(',');
inputs = inputs.map(input => parseInt(input));

inputs[1] = 12;
inputs[2] = 2;

const updateValues = (index, operation) => {
    switch(operation) {
        case 'plus':
            inputs[inputs[index + 3]] = inputs[inputs[index + 1]] + inputs[inputs[index + 2]];
            break;
        case 'multiply':
            inputs[inputs[index + 3]] = inputs[inputs[index + 1]] * inputs[inputs[index + 2]];
            break;
        }
}

let iter = 0;
while (iter < inputs.length) {
    const input = inputs[iter];
    if (inputs[iter] === 99) break;
    
    switch(input) {
        case 1:
            updateValues(iter, 'plus');
            break;
        
        case 2:
            updateValues(iter, 'multiply')
            break;
    }
    iter += 4;
}

console.log(inputs[0]);
const fs = require('fs');

// Parsing data from txt file
const data = fs.readFileSync('./input.txt', 'utf-8');
let nums = data.split(',');

// Converting from string to int
nums = nums.map(input => parseInt(input));

// Duplicating the array
const inputs = [...nums];

// Initial condition
inputs[1] = 12;
inputs[2] = 2;


// Utility function to update the array elements based on the operation
const updateValues = (index, operation, arr) => {
    switch (operation) {
        case 'plus':
            arr[arr[index + 3]] = arr[arr[index + 1]] + arr[arr[index + 2]];
            break;
        case 'multiply':
            arr[arr[index + 3]] = arr[arr[index + 1]] * arr[arr[index + 2]];
            break;
    }
}

// Main function
const execInstruction = (inputArr) => {
    const arr = [...inputArr];
    let iter = 0;
    while (iter < arr.length) {
        const input = arr[iter];
        if (arr[iter] === 99) break;

        switch (input) {
            case 1:
                updateValues(iter, 'plus', arr);
                break;

            case 2:
                updateValues(iter, 'multiply', arr)
                break;
        }
        iter += 4;
    }
    return arr;
}

const part1 = execInstruction(inputs);
console.log(part1[0])


// PART 2



for (let i = 0; i < 99; i++) {
    for (let j = 0; j < 99; j++) {
        let inputs2 = [...nums];
        inputs2[1] = i;
        inputs2[2] = j;
        inputs2 = execInstruction(inputs2);

        if (inputs2[0] === 19690720) {
            console.log(i, j);
            break;
        }
    }
}
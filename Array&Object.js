let numbers = [5, 3, 8, 1, 2];

function addNumber(num) {
    numbers.push(num);
    console.log(`Number ${num} added. Array: ${numbers}`);
}

function removeNumber(num) {
    const index = numbers.indexOf(num);
    if (index !== -1) {
        numbers.splice(index, 1);
        console.log(`Number ${num} removed. Array: ${numbers}`);
    } else {
        console.log(`Number ${num} not found in array.`);
    }
}

function sortNumbers() {
    numbers.sort((a, b) => a - b);
    console.log(`Array sorted: ${numbers}`);
}

function calculateSum() {
    const sum = numbers.reduce((acc, curr) => acc + curr, 0);
    console.log(`Sum of numbers: ${sum}`);
    return sum;
}

function calculateAverage() {
    if (numbers.length === 0) return 0;  // Check for empty array
    
    const sum = numbers.reduce((acc, curr) => acc + curr, 0);
    const average = sum / numbers.length;
    console.log(`Average of numbers: ${average}`);
    return average;
}

addNumber(4);
removeNumber(3);
sortNumbers();
calculateSum();
calculateAverage();

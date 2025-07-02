const numbers = [1, 2, 3];

console.log("[CÁCH 1] :");
let eachNumber = numbers.forEach((number) => {
    console.log(number);
});

console.log("[CÁCH 2] :");
for (let entry of numbers) { // for...of : vòng lặp in ra từng phần tử của array
    console.log(entry);
};

console.log("[CÁCH 3] :");
for (let index in numbers) {
    console.log(numbers[index]); // for...in : vòng lặp in ra từng giá trị index của array
}
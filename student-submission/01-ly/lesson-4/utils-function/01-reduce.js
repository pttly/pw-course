const scores = [85, 90, 78];
const numbers = [1, 2, 3, 4];
const expenses = [50, 100, 150];

//## [6.1]
let sumScore = scores.reduce((total, score) => {
    return total + score;
}, 0);
console.log("Tổng các giá trị trong scores là : " + sumScore);

//## [6.2]
let multiplyNumber = numbers.reduce((result, number) => {
    return result * number;
}, 1);
console.log("Tích các giá trị trong numbers là : " + multiplyNumber);

//## [6.3]
let sumExpense = expenses.reduce((total, expense) => {
    return total + expense;
}, 0);
console.log("Tổng các giá trị trong expenses là : " + sumExpense);
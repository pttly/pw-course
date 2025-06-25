const scores = [85, 90, 78];
const ages = [18, 21, 16, 25];
const words = ["apple", "banana", "cherry", "date"];

//## [1.1]
let scoreResult = scores.every(score => score > 70);
console.log(scoreResult);

//## [1.2]
let scoreAge = scores.every(score => score > 15);
console.log(scoreAge);

//## [1.3]
// let wordLength = words.map(word => word.length); //no need use map()
// let wordResult = wordLength.every(eachWordLength => eachWordLength > 3)
// console.log(wordResult);

let wordResult1 = words.every(word => word.length > 3);
console.log(wordResult1);
const scores = [85, 90, 78];
const ages = [18, 21, 16, 25];
const words = ["apple", "banana", "cherry", "date"];

//## [1.1]
let scoreResult = scores.every(score => score > 70);
if (scoreResult = true) {
    console.log("Tất cả giá trị trong scores > 70 : đúng");
} else {
    console.log("Tất cả giá trị trong scores > 70 : sai")
};

//## [1.2]
let scoreAge = scores.every(score => score > 15);
if (scoreAge = true) {
    console.log("Tất cả giá trị trong ages > 15 : đúng");
} else {
    console.log("Tất cả giá trị trong ages > 15 : sai")
};

//## [1.3]
let wordLength = words.map(word => word.length);
let wordResult = wordLength.every(eachWordLength => eachWordLength > 3)
if (wordResult = true) {
    console.log("Độ dài tất cả từ trong words > 3 : đúng");
} else {
    console.log("Độ dài tất cả từ trong words > 3 : sai");
}
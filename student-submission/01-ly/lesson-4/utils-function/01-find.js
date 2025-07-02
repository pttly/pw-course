const scores = [85, 90, 78];
const ages = [18, 21, 16, 25];
const words = ["apple", "banana", "cherry", "date"];

//## [3.1]
let firstScoreGreaterThan80 = scores.find(score => score > 80);
console.log(`Giá trị đầu tiên trong scores > 80 là : ${firstScoreGreaterThan80}`);

//## [3.2]
let firstAgeGreaterThan20 = ages.find(age => age > 20);
console.log(`Giá trị đầu tiên trong ages > 20 là : ${firstAgeGreaterThan20}`);

//## [3.3]
let firstWordLengthGreaterThan5 = words.find(word => word.length > 5)
console.log(`Giá trị đầu tiên trong words có độ dài > 5 là : ${firstWordLengthGreaterThan5}`)
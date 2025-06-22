const scores = [85, 90, 78];
const ages = [18, 21, 16, 25];
const words = ["apple", "banana", "cherry", "date"];

//## [5.1]
let scoreResult = scores.some(score => { score > 80 });
if (scoreResult = true) { //not ==true
    console.log(`scores có chứa giá trị > 80 : đúng`);
} else {
    console.log(`scores có chứa giá trị > 80 : sai`);
};

//## [5.2]
let ageResult = ages.some(age => { age < 18 });
if (ageResult = true) { //not ==true
    console.log(`ages có chứa giá trị < 18 : đúng`);
} else {
    console.log(`ages có chứa giá trị < 18 : sai`);
};

//## [5.3]
let wordResult = words.some(word => word.length > 5)
if (wordResult = true) { //not ==true
    console.log(`words có chứa từ dài > 5 : đúng`);
} else {
    console.log(`words có chứa từ dài > 5 : sai`);
};
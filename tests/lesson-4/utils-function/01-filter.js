const scores = [85, 90, 78];
const ages = [18, 21, 16, 25];
const words = ["apple", "banana", "cherry", "date"];

//## [2.1]
let scoreResult = scores.filter(score => {
    if (score > 80) {
        console.log("Giá trị trong scores > 80 là : " + score)
    };
})

//## [2.2]
let ageResult = ages.filter(age => age >= 18);
for(let i in ageResult) {
    console.log(`Giá trị trong ages >= 18 là : ${ageResult[i]}`);
};

//## [2.3]
//Filter qua từng từ, nếu độ dài từ > 5, thì in ra từ đó
let wordLengthMoreThan5 = words.filter(word => {
    if (word.length > 5) {
        console.log("Từ trong words có độ dài > 5 là : " + word);
    };
});

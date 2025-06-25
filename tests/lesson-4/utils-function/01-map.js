const scores = [85, 90, 78];
const numbers = [1, 2, 3];

//## [4.1]
let newScores = scores.map(score => {
    console.log("scoreValue", score)
    if (score < 90) {
        return score * 1.1; //undefined if missing "return", why? ==> inside a function body {} you always have to 'return'. BUT {num => num * 2} no 'return' needed due to implicit return
    } else { 
        return score * 0.95; //undefined if missing "return"
    };
});
console.log(newScores);

//## [4.2]
let str = numbers.map(number => number.toString());
console.log(str);

//## [4.3]
let double = numbers.map(number => number * number);
console.log(double);


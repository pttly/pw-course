//## [1]
//Viết hàm multiply nhận 2 tham số a và b, in ra kết quả nhân của chúng
function multiply(a1, b1) {
    return a1 * b1;
};
//Gọi hàm với 2 cặp giá trị khác nhau.
let a1 = [2, 3];
let b1 = [4, 5];
for(let i = 0; i < a1.length; i++) {
    console.log(multiply(a1[i],b1[i]));
};

//## [2]
//Viết hàm findMin nhận 3 tham số a, b, c, trả về giá trị nhỏ nhất. 
function findMin(a2, b2, c2) {
    let min = 0;
    if ( a2 <= b2 && a2 <= c2) {
        min = a2;
    } else if (b2 <= a2 && b2 <= c2) {
        min = b2;
    } else {
        min = c2;
    };
    return `Số nhỏ nhất trong ${a2}, ${b2}, ${c2} là ${min}`;
};
//Gọi hàm và in kết quả với 2 bộ số khác nhau.
let a2 = [2, 3];
let b2 = [4, 5];
let c2 = [0, 2]
for(let i = 0; i < a2.length; i++) {
    console.log(findMin(a2[i], b2[i], c2[i]));
};

//## [3]
function getTopStudents (students, threshold) {
    let result = [];
    for(let i = 0; i < students.length; i++) {
        if (students[i].score >= threshold) {
            result.push(students[i].name);
        };
    };
    return result;
};
console.log(getTopStudents([{"name":"Julia","score":7},{"name":"John","score":9},{"name":"Maria","score":3}], 7));

//## [4]
function calculateInterest (principal, rate, years) {
    let total = 0;
    total += principal + principal * rate * years / 100;
    return `Tổng số tiền (gốc + lãi) sau ${years} năm : ${total}`
}
console.log(calculateInterest(500000, 6, 20));
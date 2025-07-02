const str = "Playwright";
const arr = [1, 2, 3, 4, 3, 55, 23];
const dupArr = [1, 2, 3, 1, 2, 4, 5];

//## [2.1]
console.log("CÁCH 1 :")
for(let letter of str) {
    console.log(letter);
};

console.log("CÁCH 2 :")
for(let letter2 in str) {
    console.log(str[letter2]);
};

//## [2.2]
//Cần tạo một array mới, lấy giá trị từ chuối str đâỏ ngược lại
//Note : độ dài chuỗi = index cuối + 1
let reverseStr = [];
let indexEnd = str.length - 1;
for(let i = indexEnd; i >= 0; i--) {
    reverseStr.push(str[i]);
};
console.log(reverseStr);

//## [2.3]
//Dùng find giá trị 3, in ra index đầu tiên
//Tạo vòng lặp các index, đảo chiều của arr, nếu gặp giá trị 3, break vòng lặp và in ra index cuối cùng
let firstFind = arr.find(number => number == 3);
console.log("Vị trí đầu tiên của giá trị 3 là : " + firstFind);

let lastFind = 0;
for(let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] == 3) {
        console.log("Vị trí cuối cùng của giá trị 3 là : " + i);
        break;
    };
};

//## [2.4]
// lấy value index trước, lần lượt so sánh với value các index sau, nếu bằng thì end
for(let i1 of dupArr) {
    for(let i2 = 1; i2 < dupArr.length; i2++) {
        if (i1 != dupArr[i2]) {

            console.log(``)
        }
    }
}
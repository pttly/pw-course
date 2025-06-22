const numbers = [1, 2, 3];
const names = ["Alice", "Bob", "Charlie"];

//## [1] PUSH
numbers.push(4);
console.log(numbers);

names.push("David");
console.log(names);

//## [2] POP
numbers.pop();
console.log(numbers);

//## [3] UNSHIFT 
//Thêm một hoặc nhiều phần tử vào đầu mảng, trả về độ dài mới của mảng, làm thay đổi mảng gốc.
numbers.unshift(0);
names.unshift("David");

console.log(numbers);
console.log(names);

//## [4] SHIFT
numbers.shift();
console.log(numbers);

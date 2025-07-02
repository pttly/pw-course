const student = { "name": "Alex", "age": 10, "salary": 20 };

//## [3.1]
for(let prop in student) {
    console.log(`${prop}: ${student[prop]}`); //Not use student["prop"] here, prop represent for "name", "age","salary" 
};

//## [3.2]
//Cách xác định giá trị số: number * 0 = 0
let sum = 0;
for(prop in student) {
    if (student[prop] * 0 == 0) {
        sum += student[prop];
    }
}
console.log(`Tổng các giá trị số trong student là: ${sum}`);

//## [3.3]
let arr = [];
for (let prop in student) {
    arr.push(prop);
};
console.log(arr);

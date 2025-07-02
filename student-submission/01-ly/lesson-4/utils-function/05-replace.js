const phoneNumber = "0123 456 789";
const report = "Có một lỗi trong hệ thống.";
const numbersStr = "1,234,567";

//## [1]
console.log(`Thay khoảng trắng bằng "." trong phoneNumber : ${phoneNumber.replaceAll(" ", ".")}`);

//## [2]
console.log(`Thay "lỗi" bằng "bug" trong report : ${report.replace("lỗi", "bug")}`);

//## [3]
console.log(`Thay "," bằng "." trong numbersStr : ${numbersStr.replaceAll(",", ".")}`);












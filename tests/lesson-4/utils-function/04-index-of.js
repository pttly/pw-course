const name = "Nguyễn Văn A";
const email = "example@gmail.com";
const productName = "MacBook Pro";
const description = "Khóa học JavaScript cơ bản";

//## [2.1]
let newName = name.toLowerCase();
console.log("Vị trí của 'a' trong name là : " + newName.indexOf("a"));

//## [2.2]
console.log("Vị trí của '@' trong email là : " + email.indexOf("@"));

//## [2.3]
console.log("'JavaScript' trong description bắt đầu từ vị trí : " + description.indexOf("JavaScript"));
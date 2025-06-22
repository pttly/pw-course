const name = "Nguyễn Văn A";
const emails = "example1@gmail.com,example2@gmail.com,example3@gmail.com";
const date = "2024-05-19";

//## [1]
let newName = name.split(" ");
console.log(newName);

//## [2]
let newEmails = emails.split(",");
console.log(newEmails);

//## [3]
let newDate= date.split("-");
console.log(newDate);
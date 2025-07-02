// console.log("[CÁCH 2]");
// function decryptCode2 (code2) {
//     let lowerCase = "abcdefghijklmnopqrstuvwxyz";
//     let ignoreCase = "1234567890 ";
//     let result = "";
//     console.log("code length", code2.length);
//     //Tạo vòng lặp qua từng ký tự của dãy code
//     for(let i = 0; i < code2.length; i++) {
//         switch (code2[i]) {
//             //Nếu ký tự là lowerCase, thì chuyển thành viết hoa
//             case lowerCase.includes(code2[i]):
//                 result += code2[i].toUpperCase();
//                 console.log("resultOfLowerCase", result);
//                 break;
//             //Nếu ký tự là ignoreCase, thì giữ nguyên
//             case ignoreCase.includes(code2[i]):
//                 result += code2[i];
//                 break;
//             //Không thuộc hai trường hợp trên, thì rơi vào dạng viết hoa, cần chuyển thành viết thường
//             default:
//                 result += code2[i].toLowerCase();
//         }
//     };
//     return `Dãy mật mã "${code2}" được giải mã thành "${result}"`;
// };
// console.log(decryptCode2("k1k"));

//--------------------
// let text = "JavaScript";
// for (let letter of text) { //for ... of : dùng được cho string
//     console.log(letter);
// }

//--------------------
// object:
// let product = {
//     Banana: 20,
//     Apple: 30,
//     Orange: 15,
//     "Qua chuoi": 12
// }

// for (let property in product) { //for ...in : dùng để lặp qua các propertyName của obj, NOT propertyValue
//     //console.log(property);
//     //console.log(product.property); 
//     console.log(product[property]); //khác product.property chỗ nào?
// }

//--------------------
//array:
// const arr = [1, 2, 3, 4];

// for (let i in arr) {
//     console.log(i); // output = 0 1 2 3
//     //console.log(arr[i]);
// }

// //--------------------
// let person = {name: "John", age: 30};
// console.log(person.name); //outut = John
// console.log(person["name"]); //outut = John

// //--------------------
// let arr1 = [1, 2, 3];
// arr1[10] = 99;
// console.log(arr1.length); //output = 11

// //--------------------
// let a = !!false
// console.log(a); //output = false

//--------------------
// let arr = [1,2,3]
// let a = arr.unshift(0,4) // output is new length 4
// console.log(arr); //add one/more value at START of array
// console.log(a);

// let arr = [1,2,3]
// let a = arr.push(0) // output is new length 4
// console.log(arr); //add one/more value at END of array
// console.log(a);

//--------------------
// const str = ["P", "l", "a", "y", "w", "r", "i", "g", "h", "t"];
// for (let letter of str) {
//     console.log(letter); //output for array: in ra từng phần tử của str array
// };

let str1 = {
    name : "Julia",
    age : 18
};
for (let property of str1) { //error : for ... of cannot use for object
    console.log(property);
}
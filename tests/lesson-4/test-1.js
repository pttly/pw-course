//## [1]----------------
console.log("------[Bài 1]------")

let departurePlanet = "Trái Đất";
let mission = "Khám phá Vũ trụ K15";
let crew = ["Sun!", "Huong CAO", "Thùy Trang Đoàn", 
            "hoang hoang", "Vĩnh Phú Lê", "Hoàng Thị Phương Mai", 
            "Dang Nhu", "Liên Phạm", "Nhi Trần", "Ly Phan"
            ];

// //Tạo array mới, có thêm " ," sau mỗi giá trị của array
// let newCrew = crew.map((crewEntry) => {
//     if (crewEntry == crew.at(-1)) {
//         return crewEntry}
//     else {
//         return crewEntry += ", ";
//     }    
// })

// //Tạo danh sách thành viên: lặp qua từng entry của array newCrew và cộng chuỗi
// let newCrewList = [];
// newCrew.forEach((newCrewMember) => {
//         newCrewList += newCrewMember;
//     })

// //Tạo thông điệp
// let messange = `"Chuẩn bị khởi động! Phi hành đoàn gồm: ${newCrewList} sẽ đồng hành cùng bạn trong chuyến
//                 phiêu lưu ${mission}!".`
// console.log(messange);

//------------------
function launchShip (crew) {
    let crewList = [];
    crew.forEach((crewEntry) => {
        if (crewEntry != crew.at(-1)) {
            crewList += crewEntry + ", ";
        } else {
            crewList += crewEntry;
        };
    });
    return `Chuẩn bị khởi động! Phi hành đoàn gồm: ${crewList} sẽ đồng hành cùng bạn 
            trong chuyến phiêu lưu ${mission}!`
}
console.log(launchShip(crew));

//## [2]----------------
console.log("------[Bài 2]------")

function calculateDistance (speed, time) {
    let distance = 0;
    distance = speed * time;
    return "Khoảng cách đến hành tinh là " + distance + " km";
};
console.log(calculateDistance(1000, 24));

//## [3]----------------
console.log("------[Bài 3]------")

function convertTimeToHex (time) {
    return "Thời gian chuyển đổi thời gian " + time + "s" + " qua hệ thập lục phân là " + time.toString(16);
};
console.log(convertTimeToHex(120));

//## [4]----------------
console.log("------[Bài 4]------")

/*
Cần một vòng lặp qua tất cả ký tự
Gán ký tự với một biến trong khi thực hiện giải mã bên dưới
Nếu thuộc upperArr, thì continue thực hiện chuyển thành viết thường
Nếu thuộc lowerArr, thì continue chuyển thành viết hoa

Ghi chú:
- không dùng forEach, vì đối tượng là một chuỗi string. forEach dùng cho array
- lowerCase.includes(code[i]) : khi dùng với if không cần so true/false ở condition, với kết quả true sẽ tự thực hiện {}, kết quả  false sẽ không thực hiện {}
*/

console.log("[CÁCH 1]");
function decryptCode (code) {
    let lowerCase = "abcdefghijklmnopqrstuvwxyz";
    let ignoreCase = "1234567890 ";
    let result = "";
    //Tạo vòng lặp qua từng ký tự của dãy code
    for(let i = 0; i < code.length; i++) {
        //Nếu ký tự là lowerCase, thì chuyển thành viết hoa
        //incorrect : lowerCase.includes(code[i]) = true
        if (lowerCase.includes(code[i])) {
            result += code[i].toUpperCase();
        //Nếu ký tự là ignoreCase, thì giữ nguyên
        } else if (ignoreCase.includes(code[i])) {
            result += code[i];
        //Không thuộc hai trường hợp trên, thì rơi vào dạng viết hoa, cần chuyển thành viết thường
        } else {
            result += code[i].toLowerCase();
        }
    };
    return `Dãy mật mã "${code}" được giải mã thành "${result}"`;
};
console.log(decryptCode("K15 Challenge"));

//-------------------
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
//     console.log(result);
//     return `Dãy mật mã "${code2}" được giải mã thành "${result}"`;
// };
// console.log(decryptCode2("K15 Challenge"));

//## [5]----------------
console.log("------[Bài 5]------")

function returnToEarth () {
    return "Chuẩn bị trở về Trái Đất!";
}
console.log(returnToEarth());
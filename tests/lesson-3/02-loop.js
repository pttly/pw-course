//## [1]
//Tính tổng từ 1 đến 100
let sum = 0;
for(let i = 1; i <= 100; i++){
    sum += i;
};
console.log(sum);

//## [2]
//In bảng cửu chương từ 2 đến 9
let result = 1;
for(let n1 = 2; n1 <= 9; n1++) {
    for(let n2 = 1; n2 <= 10; n2++) {
    result = n1 * n2;
    console.log(`Bảng cửu chương ${n1} : ${n1} * ${n2} = ${result}`)
    };
};

//## [3]
//Tạo một mảng chứa các số lẻ từ 1 đến 99
let array = [];
for(let i = 1; i <= 99; i++) {
    if (i % 2 == 1) {
        array.push(i);
    };
};
console.log(array);

//## [4]
//In ra 10 email dựa trên tên người dùng và số thứ tự
for(let i = 1; i <= 10; i++) {
    console.log(`user${i}@example.com`);
};

//## [5]
//Tính tổng doanh thu của 12 tháng trong năm dựa trên mảng doanh thu đã cho và in ra tổng doanh thu
let totalRevenue12Month = 0;
let revenueInMillion = [
  { "month": 1, "total": 120 },
  { "month": 2, "total": 95 },
  { "month": 3, "total": 110 },
  { "month": 4, "total": 130 },
  { "month": 5, "total": 145 },
  { "month": 6, "total": 160 },
  { "month": 7, "total": 180 },
  { "month": 8, "total": 175 },
  { "month": 9, "total": 150 },
  { "month": 10, "total": 140 },
  { "month": 11, "total": 125 },
  { "month": 12, "total": 100 }
];
for(let i = 0; i < revenueInMillion.length; i++) {
    totalRevenue12Month += revenueInMillion[i].total;
};
console.log(`Tổng doanh thu của 12 tháng : ${totalRevenue12Month}`)

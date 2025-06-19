//## [1]
let car = {
    "make" : "Toyota",
    "model" : "Corolla",
    "year" : 2021
};
console.log("năm sản xuất của xe : " + car.year);

//## [2]
let person = {
    "name" : "Julia",
    "address" : {
        "street" : "Pham Van Dong",
        "city" : "Ho Chi Minh",
        "country" : "Vietnam"
    }
};
console.log("tên đường của người : " + person.address.street);

//## [3]
let student = {
    "name": "John",
    "grades" : {
        "math" : 8,
        "english" : 9
    }
};
console.log(`điểm môn toán : ${student["grades"]["math"]}`);

//## [4]
let settings = {
    "volume" : 70,
    "brightness" : 100
};
settings.volume = 90;
console.log(settings);

//## [5]
let bike = {};
bike.color = "pink";
console.log(`màu của xe đạp : ${bike.color}`);

//## [6]
let employee = {
    "name" : "Julia",
    "age" : 32
}
delete employee.age;
console.log(employee);

//## [7]
let school = {
    "classA" : ["An", "Bình", "Châu"],
    "classB" : ["Đào", "Hương", "Giang"]
}
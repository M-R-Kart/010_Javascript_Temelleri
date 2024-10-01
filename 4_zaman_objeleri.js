// ! DATE OBJECT

let zaman = new Date();
let birthday = new Date(1996,6,12);

//* Set Methods

zaman.setDate(12);
zaman.setMonth(6);
zaman.setFullYear(2024);
zaman.setHours(20);
zaman.setMinutes(30);
zaman.setSeconds(50);
zaman.setMilliseconds(500);

//* Get Methods

console.log(zaman.getMonth());
console.log(zaman.getDate());
console.log(zaman.getFullYear());
console.log(zaman.getDay());
console.log(zaman.getHours());
console.log(zaman.getMinutes());
console.log(zaman.getSeconds());
console.log(zaman.getMilliseconds());

console.log(zaman.getFullYear() - birthday.getFullYear());
console.log(zaman.getMonth() - birthday.getMonth());

console.log(zaman);
console.log(typeof zaman);

////////////////////////////////////////////////////////////////
//! Günümüz tarihinde kişinin yaşını hesaplama 

let today = new Date();
let birthday = new Date("1996-6-12");

let age = today.getFullYear()-birthday.getFullYear();
let ayFarki = today.getMonth()-birthday.getMonth();


console.log(age);

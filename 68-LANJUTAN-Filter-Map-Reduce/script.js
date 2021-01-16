// membuat vatiabel
const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];

// filter angka >=3 dan disimpan ke const newAngka
// const newAngka = [];
// dengan menggunakan for
// for (let i = 0; i < angka.length; i++) {
//     if (angka[i] >= 3) {
//         newAngka.push(angka[i]);
//     }
// }

// console.log(newAngka);

// dengan menggunakan filter
// const newAngka = angka.filter(function (a) {
//     return a >= 3;
// });

// console.log(newAngka);

// dengan menggunakan filter arrow function (tidak perlu pakai function dan {} )
// const newAngka = angka.filter((a) => a >= 3);

// console.log(newAngka);




// map semua index angka * 2 (map menghasilkan array baru)
// const newAngka = angka.map(function (a) {
//     return a * 2;
// });

// console.log(newAngka);

// dengan map arrow function
// const newAngka = angka.map((a) => a * 2);
// console.log(angka); // array angka
// console.log(newAngka); // array newAngka




// reduce (melakukan sesuatu untuk melakukan perubahan pada elemen array) punya 2 parameter
// default nya punya nilai awal = o kalau gak ditentukan nilai awalnya adalah = 0
// parameter pertama    : accumulator adalah hasil dari prosesnya
// parameter kedua      : currentValue adalah elemen array yang sedang di looping

// contoh menjumlahkan seluruh elemen array
// const newAngka = angka.reduce(function (accumulator, currentValue) {
//     return accumulator + currentValue;
// }, 5); // nilai awal dimulai dari 5

// console.log(newAngka);

// contoh dengan arrow function
// const newAngka = angka.reduce((accumulator, currentValue) => accumulator + currentValue, 5);
// console.log(newAngka);


// contoh menggunakan method chaining
// mencari angka lebih dari 5
// lalu setelah dicari angka nya * 3
// lalu jumlahkan

// const newAngka = angka.filter(function (a) {
//     return a > 5;
// }).map(function (a) {
//     return a * 3;
// }).reduce(function (accumulator, currentValue) {
//     return accumulator + currentValue;
// });

// console.log(newAngka);

// dengan arrow function
const newAngka = angka.filter((a) => a > 5)
    .map((a) => a * 3)
    .reduce((acc, curr) => acc + curr);
console.log(newAngka);
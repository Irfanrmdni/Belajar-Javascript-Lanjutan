
// Closure
// function init() {
//     let nama = 'irpan ramdani'; // local variabel

//     function tampil() { // inner function / closure
//         console.log(nama);  // akses ke parent variabel / Lexical
//     }

//     tampil();
// }

// init(); // output irfan ramdani

// dengan mereturn fungsi tampil
// function init() {
//     let nama = 'irpan ramdani';

//     function tampil() { // inner function 
//         console.log(nama);  // closure karena console.log nama mengambil variabel dari luar
//     }

//     return tampil; // akan di return fungsi nya
// }
// // untuk menjalankan nya harus ditampung dulu di variabel dan panggil variabel nya
// let name = init();
// name();


// dengan menggunakan parameter di fungsi nama
// function init() {
//     let nama = 'irpan ramdani';

//     function tampil(nama) { // inner function 
//         console.log(nama);  // closure karena console.log nama mengambil variabel dari luar
//     }

//     return tampil; // akan di return fungsi nya
// }
// // untuk menjalankan nya harus ditampung dulu di variabel dan panggil variabel nya
// let name = init();
// name('irpan ramdani');

// membuat function factories
// function sambut(waktu) {
//     // mereturn inner function
//     return function (nama) {
//         console.log(`halo ${nama} selamat ${waktu}`);
//     }
// }

// // menjalankan function factories
// let pagi = sambut('pagi'); // ini mengambil fungsi sambut
// pagi('irpan'); // ini mengambil return fungsi / inner function

// contoh sederhana

// let counter = 0; // 3. supaya counter ini tidak terganggu , simpan ke dalam fungsi

// let add = function () {
//     let counter = 0; // 4. tetapi ini akan menghasilkan nilai 1 semua

//     // 5. solusi nya kita gunakan closure , kita return inner function
//     // return ++counter;

//     return function () { // 6. closure / inner function
//         return ++counter;
//     }
// }

// counter = 10; // 2. ini akan terpengaruh ke fungsi karena hoisting

// console.log(add());
// console.log(add());
// console.log(add());

// 1. ini berjalan normal namun masalahnya ketika program nya sudah panjang, misalnya ada baris
// yang mengubah counter = 0 

// 7. untuk menjalankan nya kita tampung ke variabel
// let a = add();

// 8. lalu kita panggil variabel nya
// console.log(a());
// console.log(a());
// console.log(a());
// console.log(a());
// console.log(a());
// console.log(a());
// console.log(a());

// cara agar tidak membuat variabel untuk menampung nya

// =================================================================================
// Closure
// function init() {
//     let nama = 'irpan ramdani';

//     function tampil() {
//         console.log(nama);
//     }

//     return tampil;
// }

// let tampilNama = init();
// tampilNama();

// contoh 1 function factory
//function init() {
// cara 1
// function tampil(nama) {
//     console.log(nama);
// }
// return tampil;

// cara 2
// return function (nama) {
//     console.log(nama);
// }
//}

// let panggilNama = init();
// panggilNama('irfan ramdani');


// contoh 2 function factory
// function ucapkanSalam(waktu) {
//     return function (nama) {
//         console.log(`hallo ${nama} selamat ${waktu} semoga harimu menyenangkan`);
//     }
// }

// let pagi = ucapkanSalam('pagi');
// let siang = ucapkanSalam('siang');
// let sore = ucapkanSalam('sore');

// pagi('irfan);
// siang('ramdan');
// sore('galih');

// console.dir(pagi('irfan'));

// contoh 3 function factory

// let counter = 0;
// let add = function () {
//     return ++counter;
// }

// console.log(add());
// console.log(add());
// console.log(add());
// console.log(add());


// contoh 4 function factory

// let counter = 0;

// let add = function () {
//     return ++counter;
// }

// counter = 10;

// console.log(add());
// console.log(add());
// console.log(add());


// contoh 5 function factory

// let add = function () {
//     let counter = 0;

//     return function () {
//         return ++counter;
//     }
// }
// let a = add();

// console.log(a());
// console.log(a());
// console.log(a());

// function tambah(angka1, angka2) {
//     return function () {
//         let hasil = (angka1 + angka2);
//         if (hasil % 2 == 0) {
//             return `${hasil} adalah bilangan genap`;
//         } else {
//             return `${hasil} adalah bilangan ganjil`;
//         }
//     }
// }

// let angka1 = tambah(2, 19);
// console.log(angka1());

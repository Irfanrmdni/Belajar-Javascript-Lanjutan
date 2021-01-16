
// Closure
// function init() {
//     let nama = 'irpan ramdani';

//     function tampil() { // inner function 
//         console.log(nama);  // closure karena console.log nama mengambil variabel dari luar
//     }

//     tampil();
// }

// init();

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
//     // let nama = 'irpan ramdani';

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

let add = function () {
    let counter = 0; // 4. tetapi ini akan menghasilkan nilai 1 semua

    // 5. solusi nya kita gunakan closure , kita return inner function
    // return ++counter;

    return function () { // 6. closure / inner function
        return ++counter;
    }
}

counter = 10; // 2. ini akan terpengaruh ke fungsi karena hoisting

// console.log(add());
// console.log(add());
// console.log(add());

// 1. ini berjalan normal namun masalahnya ketika program nya sudah panjang, misalnya ada baris
// yang mengubah counter = 0 

// 7. untuk menjalankan nya kita tampung ke variabel
let a = add();
// 8. lalu kita panggil variabel nya
console.log(a());
console.log(a());
console.log(a());
console.log(a());
console.log(a());
console.log(a());
console.log(a());

// cara agar tidak membuat variabel untuk menampung nya

// contoh membuat function dari argumen selesai

// function tugas ini disebut Higher Order Function
// function dari argumen selesai ini disebut callback

// function tugas(pelajaran, selesai) {
//     console.log(`Mulai mengerjakan tugas ${pelajaran} ....`);
//     selesai(); // parameter nya dibuat seperti ini
// }

// // membuat function untuk argumen selesai
// function selesai() {
//     alert(`anda selesai mengerjakan tugas`);
// }

// // kita panggil dan jalankan
// tugas('matematika', selesai);


// contoh 02
// setTimeout ini disebut juga Higher Order Function callback nya function ()
// setTimeout(function () {
//     console.log('hello world!');
// }, 1000);

// // contoh 03 
// // addEventListener ini disebut juga Higher Order Function callback nya function ()
// const tombol = document.querySelector('.tombol');
// tombol.addEventListener('click', function () {
//     console.log('tombol ditekan');
// })

// // contoh 04
// // ucapkanSalam ini disebut juga Higher Order karena ada return value yang juga function
// function ucapkanSalam(waktu) {
//     return function (nama) {
//         console.log(`halo ${nama} selamat ${waktu}`);
//     }
// }

// let pagi = ucapkanSalam('pagi');
// console.log(pagi('irpan'));

// ===================================================================================================

// Higher order function

// function tugas disebut dengan higher order function
// parameter selesai disebut callback
// function tugas(matakuliah, selesai) {
//     console.log(`Mulai mengerjakan tugas ${matakuliah} ...`);
//     selesai();
// }



// function selesai() {
//     alert('selesai mengerjakan tugas');
// }

// tugas('matematika', selesai);


// contoh higher order function

// setTimeout
// setTimeout(function () {
//     console.log('hello world');
// }, 1000);

// addEventListener
// const tombol = document.querySelector('.submit');
// tombol.addEventListener('click', function () {
//     console.log('tombol ditekan');
// })

// closure
// function ucapkanSalam(waktu) {
//     return function (nama) {
//         console.log(`hallo ${nama} selamat ${waktu}`);
//     }
// }

// let siang = ucapkanSalam('siang');
// siang('irfan');



// contoh tanpa menggunakan function
// let total = 0;
// let count = 1;

// while (count <= 19) {
//     total += count;
//     count++;
// }

// console.log(`total output ${total}`);



// contoh dengan menggunakan menyederhanakan code dengan function
// console.log(Sum(range(1, 10)));


// contoh dengan menggunakan menyederhanakan code dengan function

// function repeat(n) {
//     for (i = 0; i < n; i++) {
//         console.log(i);
//     }
// }

// repeat(10);



// 2 Fase pada Execution Context

// contoh 1
// ini akan menghasilkan undefined karena variabel nya diatas
// console.log(nama);
// var nama = 'irpan';

// ini akan menghasilkan nama 'irpan'
// var nama = 'irpan';
// console.log(nama);

// yang terjadi pada saat program dijalankan ada sesuatu yang disebut dengan (fase Creation) pembentukan
// ini terjadi di context global karena buat nya langsung di file javascript nya tidak di dalam function
// javascript akan mengecek terlebih dahulu apakah ada variabel nya / function nya
// kalau ada dia akan memberi nama variabel dengan isi undefined (semua variabel akan diset undefined)
// kalau ada function maka akan diisi function itu sendiri

// nah itu disebut dengan konsep hoisting (seperti menaikan bendera keatas)

// selain dari fase itu (variabel dengan isi undefined), (function maka akan diisi function itu sendiri)
// ada lagi yang didefinisikan
// 1. javascript mendefinisikan object window = global object
// 2. javascript mendefinisikan this = window

// setelah itu execution fase (dijalankan dari atas kebawah)

// contoh 2
// kalau console log nya di atas function maka tidak masalah

// console.log(hello()); ini akan menghasilkan undefined

// var nama = 'irpan';
// var umur = 20;

// console.log(hello()); // ini akan dieksekusi / berjalan

// function hello() {
//     // karena tidak ada return maka akan menghasilkan undefined
//     // console.log(`nama saya ${nama} umur saya ${umur}`);

//     // kita gunakan return untuk menghilangkan undefined
//     return `nama saya ${nama} umur saya ${umur}`;
// }

// function membuat local Execution context yang didalamnya terdapat juga creation dan execution
// selain window , ada arguments dan hoisting

// contoh 3
// var nama = 'irfanrmdni';
// var instagram = '@irfanrmdni_';

// function cetak(username) {
//     var url = 'https://instargam.com/';
//     return url + username;
// }

// console.log(cetak(instagram));

// pertama : var nama dan instagram akan undefined dan cetak akan menghasilkan isi fungsi nya
// kedua : var nama di isi 'irfanrmdni' dan instagram di isi '@irfanrmdni_' yang fungsi cetak di skip
// ketiga : cetak var nama dan instagram
// keempat : akan membuat context lokal karena ada fungsi cetak
// kelima : var url akan undefined dan username akan menghasilkan '@irfanrmdni_'
// keenam : var url akan di isi 'https://instargam.com/'
// ketujuh : akan menjalani return url + username dan mencetak ke memory
// kedelapan : lalu akan ditampilkan 

// contoh 4
// function a() {
//     console.log('ini a');

//     function b() {
//         console.log('ini b');
//     }
//     b();

//     function c() {
//         console.log('ini c');
//     }
//     c();
// }

// a(); // akan menghasilkan abc

// contoh 5
var nama = 'irfanrmdni';
var instagram = '@irfanrmdni_';

// function cetak(username) {
//     var url = 'https://instargam.com/';
//     return url + instagram;
// }

// console.log(cetak('@nabilaputri')); // ini akan mengambil @nabilaputri dan akan mengabaikan var instagram = '@irfanrmdni_'

function cetak() {
    // yang @nabilaputri akan masuk ke object yang namanya arguments
    console.log(arguments);
    var url = 'https://instargam.com/';
    return url + instagram;
}

console.log(cetak('@nabilaputri')); // ini akan mengambil var instagram = '@irfanrmdni_'; dan akan mengabaikan @nabilaputri
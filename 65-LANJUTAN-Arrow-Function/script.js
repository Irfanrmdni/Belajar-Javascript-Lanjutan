// // Function Declaration
// function tampilPesan(nama) {
//     console.log(`hallo nama saya ${nama}`);
// }

// tampilPesan('irpan');

// // Function Ekspresi
// let tampilUmur = function (umur) {
//     console.log(`hallo umur saya ${umur}`);
// }

// tampilUmur(20);

// // Arrow Function
// let tampilAlamat = (alamat) => {
//     console.log(`alamat saya ${alamat}`);
// }

// tampilAlamat('sarijadi');

// Arrow Function lebih dari 1 parameter
// const tampilSalam = (waktu, nama) => {
//     return `hallo ${nama} selamat ${waktu}`;
// }

// console.log(tampilSalam('pagi', 'irpan'));

// // kalo parameter nya 1 cukup gunakan implicit return
// const buah = nama => `buah ${nama}`;
// console.log(buah('anggur'));

// kalo gak ada parameter cukup gunakan kurung
// const warna = () => `warna hijau`;
// console.log(warna());

// contoh menampilkan jumlah mahasiswa pada array dan jumlah huruf
const mahasiswa = ['agus budiman', 'nabila fatimah', 'anisa siti fauzi'];
// cara tanpa arrow function
// let jumlahHuruf = mahasiswa.map(function (nama) {
//     return nama.length;
// });

// console.log(jumlahHuruf);


// cara dengan arrow function
// looping array dengan map
// let jumlahHuruf = mahasiswa.map(nama => nama.length);
// console.log(jumlahHuruf);

// membuat agar nilai array menjadi object dengan arrow function buat dulu ({object})
// let jumlahHuruf = mahasiswa.map(nama => ({
//     nama: nama,
//     jmlHuruf: nama.length
// }));

// console.table(jumlahHuruf); // agar menampilkan bentuk table


// const binatang = (nama, warna) => {
//     return `nama binatang ${nama} warna nya ${warna}`;
// }

// console.log(binatang('anjing', 'hitam'));

// ================================================================================================

// dengan function expression

// contoh 1
// let outputPesan = function (nama) {
//     console.log(`hallo ${nama}`);
// }

// outputPesan('irfan');


// dengan arrow function

// contoh 1
// let outputPesan = (nama) => {
//     console.log(`hallo ${nama}`);
// }

// outputPesan('irfan');

// contoh 2
// let output = (nama, waktu) => {
//     return `hallo ${nama} selamat ${waktu} :)`;
// }

// let siang = output('irfan', 'siang');
// console.log(siang);

// contoh 3 - implicit return
// const tampil = nama => `hallo ${nama}`;

// console.log(tampil('galih'));

// contoh 4 - tidak menggunakan return
// let mahasiswa = ['erik berebet', 'asep gedang', 'kokom ajah'];

// let jumlahHuruf = mahasiswa.map(mhs => mhs);

// console.log(jumlahHuruf);

// contoh 5 - menggunakan return yang berisi objek
// let mahasiswa = ['erik berebet', 'asep gedang', 'kokom ajah'];

// let jumlahHuruf = mahasiswa.map(mhs => ({ nama: mhs, jmlHuruf: mhs.length }));

// console.log(jumlahHuruf);
// console.table(jumlahHuruf);
// Function Declaration
function tampilPesan(nama) {
    console.log(`hallo nama saya ${nama}`);
}

tampilPesan('irpan');

// Function Ekspresi
let tampilUmur = function (umur) {
    console.log(`hallo umur saya ${umur}`);
}

tampilUmur(20);

// Arrow Function
let tampilAlamat = (alamat) => {
    console.log(`alamat saya ${alamat}`);
}

tampilAlamat('sarijadi');

// Arrow Function lebih dari 1 parameter
const tampilSalam = (waktu, nama) => {
    return `hallo ${nama} selamat ${waktu}`;
}

console.log(tampilSalam('pagi', 'irpan'));

// kalo parameter nya 1 cukup gunakan implicit return
const buah = nama => `buah ${nama}`;
console.log(buah('anggur'));

// kalo gak ada parameter cukup gunakan kurung
const warna = () => `warna hijau`;
console.log(warna());

// contoh menampilkan jumlah mahasiswa pada array dan jumlah huruf
const mahasiswa = ['agus budiman', 'nabila fatimah', 'anisa siti fauzi'];
// cara tanpa arrow function
// let jumlahHuruf = mahasiswa.map(function (nama) {
//     return nama.length;
// });

// cara dengan arrow function
// looping array dengan map
// let jumlahHuruf = mahasiswa.map(nama => nama.length);
// console.log(jumlahHuruf);

// membuat agar nilai array menjadi object dengan arrow function buat dulu ({object})
let jumlahHuruf = mahasiswa.map(nama => ({
    nama: nama,
    jmlHuruf: nama.length
}));
console.table(jumlahHuruf); // agar menampilkan bentuk table


const binatang = (nama, warna) => {
    return `nama binatang ${nama} warna nya ${warna}`;
}

console.log(binatang('anjing', 'hitam'));
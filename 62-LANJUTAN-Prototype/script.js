// Prototype dengan menggunakan function constructor

// dibalik menggunakan this
// function jenisBuah(nama, berat) {
// 1. let buah = object.create()                    <- dengan object.create
// 2. let buah = {}                                 <- dengan object biasa 
// 3. let this = object.create(jenisBuah.prototype) <- dengan object this 

//     this.nama = nama;
//     this.berat = berat;

//     // return jenisBuah; <- ini tidak perlu
// }

// function jenisBuah(nama, berat) {
//     this.nama = nama;
//     this.berat = berat;
// }

// membuat method nya cukup panggil object prototype
// jenisBuah.prototype.makan = function (porsi) {
//     this.berat -= porsi;
//     return `anda memakan buah ${this.nama} selamat makan`;
// }

// jenisBuah.prototype.tambah = function (tambahBuah) {
//     this.berat += tambahBuah;
//     return `anda menambah buah ${this.nama} ${tambahBuah} jadi bertambah`;
// }

// let anggur = new jenisBuah('anggur', 10);

// dengan menggunakan versi class
// class jenisBuah {
//     constructor(nama, berat) {
//         this.nama = nama;
//         this.berat = berat;
//     }
//     // membuat method
//     makan(porsi) {
//         this.berat -= porsi;
//         return `anda memakan buah ${this.nama} selamat makan`;
//     }
//     tambah(tambahBuah) {
//         this.berat += tambahBuah;
//         return `anda menambah buah ${this.nama} ${tambahBuah} jadi bertambah`;
//     }
// }

// let anggur = new jenisBuah('anggur', 10);

// ==============================================================================================
// let methodMahasiswa = {
//     makan: function (porsi) {
//         this.energi += porsi;
//         console.log(`halo ${this.nama} selamat makan`);
//     },
//     tidur: function (jam) {
//         this.energi += jam;
//         console.log(`halo ${this.nama} selamat tidur`);
//     },
//     main: function (jam) {
//         this.energi -= jam;
//         console.log(`halo ${this.nama} selamat main`);
//     }
// };

// function Mahasiswa(nama, energi) {
//     let mahasiswa = Object.create(methodMahasiswa);
//     mahasiswa.nama = nama;
//     mahasiswa.energi = energi;

//     return mahasiswa;
// }

// let Mhs1 = Mahasiswa('irfan', 10);



// menggunakan constructor

// prototype
// function Mahasiswa(nama, energi) {
//     // yang sebenarnya terjadi di belakang layar. menggunakan this
//     // let this = Object.create(Mahasiswa.prototype);
//     this.nama = nama;
//     this.energi = energi;
// }

// Mahasiswa.prototype.makan = function (porsi) {
//     this.energi += porsi;
//     console.log(`halo ${this.nama} selamat makan`);
// }

// Mahasiswa.prototype.main = function (jam) {
//     this.energi -= jam;
//     console.log(`halo ${this.nama} selamat main`);
// }

// Mahasiswa.prototype.tidur = function (jam) {
//     this.energi += jam;
//     console.log(`halo ${this.nama} selamat tidur`);
// }

// let Mhs1 = new Mahasiswa('irfan', 10);

// versi pembuatan dengan class
// class Mahasiswa {
//     constructor(nama, energi) {
//         this.nama = nama;
//         this.energi = energi;
//     }

//     makan(porsi) {
//         this.energi += porsi;
//         console.log(`halo ${this.nama} selamat makan`);
//     }

//     main(jam) {
//         this.energi -= jam;
//         console.log(`halo ${this.nama} selamat main`);
//     }

//     tidur(jam) {
//         this.energi += jam;
//         console.log(`halo ${this.nama} selamat tidur`);
//     }
// }

// let Mhs1 = new Mahasiswa('irfan', 10);
// let Mhs2 = new Mahasiswa('arif', 10);


// membuat array
// let angka = [];

// dibalik pembuatan array yang menyimpan prototype
// let angka = new Array()

// function Array() {
//     let this = Object.create(Array.prototype);
// }

// dibalik method array yang terjadi adalah dia berasal dari objek prototype
// let angka = [1, 2, 3];
// console.log(angka.reverse());

// let angka = [3, 2, 1];
// console.log(angka.sort());
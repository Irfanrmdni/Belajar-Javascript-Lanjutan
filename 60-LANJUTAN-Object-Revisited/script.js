// Cara Membuat object javascript

//         1. Object Literal
// let mahasiswa = {
//     nama: 'irpan',
//     energy: 10,
//     // membuat method (function didalam object)
//     makan: function (porsi) {
//         this.energy = this.energy + porsi;
//         console.log(`Halo ${this.nama}, Selamat makan!`);
//     }
// };
// ketika ingin menambahkan object mahasiswa lagi maka kita harus buat object yang baru
// let mahasiswa2 = {
//     nama: 'joni',
//     energy: 20,
//     // membuat method (function didalam object)
//     makan: function (porsi) {
//         this.energy = this.energy + porsi;
//         console.log(`Halo ${this.nama}, Selamat makan!`);
//     }
// };


//         2. Function Declaration
// function Mahasiswa(nama, energi) {
//     let mahasiswa = {};
//     mahasiswa.nama = nama;
//     mahasiswa.energi = energi;

//     mahasiswa.makan = function (porsi) {
//         this.energi += porsi;
//         console.log(`halo ${nama} Selamat makan`);
//     }

//     mahasiswa.main = function (jam) {
//         this.energi -= jam;
//         console.log(`halo ${nama} Selamat bermain`);
//     }

//     return mahasiswa;
// }

// ketika ingin menambahkan object mahasiswa lagi maka kita tidak perlu membuat yang baru lagi
// let nama1 = Mahasiswa('irpan', 20);
// let nama2 = Mahasiswa('bagas', 10);
// let nama3 = Mahasiswa('jono', 30);

//         3. Constructor Function (keyword new)
// fungsi nya sama seperti function declaration hanya saja kita tidak perlu membuat variabel dan return cukup dengan this
// function Mahasiswa(nama, energi) {
//     this.nama = nama;
//     this.energi = energi;

//     this.makan = function (porsi) {
//         this.energi += porsi;
//         console.log(`halo ${nama} Selamat makan`);
//     }

//     this.main = function (jam) {
//         this.energi -= jam;
//         console.log(`halo ${nama} Selamat bermain`);
//     }

// }
// untuk membuat object nya kita gunakan new 
// let nama1 = new Mahasiswa('agus', 10);

//         4. Object.create()
// Object.create()

// const methodBuah = {
//     makan: function (porsi) {
//         this.berat -= porsi;
//         console.log(`anda memakan buah ${this.nama}`);
//     },

//     tambah: function (porsiTambah) {
//         this.berat += porsiTambah;
//         console.log(`anda menambah buah ${this.nama}`);
//     }


// };

// function Buah(nama, berat) {
//     let buah = Object.create(methodBuah);
//     buah.nama = nama;
//     buah.berat = berat;

//     return buah;
// }

// let buah1 = Buah('anggur', 10);
// ================================================================================================================================

// object literal
// let mahasiswa1 = {
//     nama: 'irfan',
//     energi: 10,
//     makan: function (porsi) {
//         this.energi += porsi;
//         console.log(`halo ${this.nama} selamat makan`);
//     }
// }
// let mahasiswa2 = {
//     nama: 'erik',
//     energi: 10,
//     makan: function (porsi) {
//         this.energi += porsi;
//         console.log(`halo ${this.nama} selamat makan`);
//     }
// }

// function declaration
// function Mahasiswa(nama, energi) {
//     let mahasiswa = {
//         nama: nama,
//         energi: energi,
//         makan: function (porsi) {
//             this.energi += porsi;
//             console.log(`halo ${this.nama} selamat makan`);
//         },
//         main: function (jam) {
//             this.energi -= jam;
//             console.log(`halo ${this.nama} selamat bermain`);
//         }
//     }

//     return mahasiswa;
// }

// let Mhs1 = Mahasiswa('irfan', 10);
// let Mhs2 = Mahasiswa('erik', 15);
// let Mhs3 = Mahasiswa('dodi', 20);

// constructor function
// function Mahasiswa(nama, energi) {
//     this.nama = nama;
//     this.energi = energi;
//     this.makan = function (porsi) {
//         this.energi += porsi;
//         console.log(`halo ${this.nama} selamat makan`);
//     }
//     this.main = function (jam) {
//         this.energi -= jam;
//         console.log(`halo ${this.nama} selamat bermain`);
//     }
// }

// let Mhs1 = new Mahasiswa('irfan', 10);
// console.log(Mhs1);
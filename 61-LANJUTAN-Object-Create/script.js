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

// cara untuk mengatasi nya dengan membuat objek terpisah
// yang method di mahasiswa pindahin ke objek methodMahasiswa (ini akan dibuat 1x jadi tidak berulang)
const methodMahasiswa = {
    makan: function (porsi) {
        this.energi += porsi;
        console.log(`halo ${this.nama} Selamat makan`);
    },

    main: function (jam) {
        this.energi -= jam;
        console.log(`halo ${this.nama} Selamat bermain`);
    }
};

// function Mahasiswa(nama, energi) {
//     let mahasiswa = {};
//     mahasiswa.nama = nama;
//     mahasiswa.energi = energi;
//     // cara menghubungkan dengan object methodMahasiswa
//     mahasiswa.makan = methodMahasiswa.makan;
//     mahasiswa.main = methodMahasiswa.main;

//     // mahasiswa.makan = function (porsi) {
//     //     this.energi += porsi;
//     //     console.log(`halo ${nama} Selamat makan`);
//     // }

//     // mahasiswa.main = function (jam) {
//     //     this.energi -= jam;
//     //     console.log(`halo ${nama} Selamat bermain`);
//     // }

//     return mahasiswa;
// }



// ini masih terdapat problem ketika kita membuat method baru di methodMahasiswa lagi maka kita harus menambahkan method
// ke fungsi mahasiswa jadi kita mengelola 2 objek
// nah kita bisa gunakan object.create dimana object ini dapat menyimpan/membawa di dalam fungsi

//         4. Object.create()

function Mahasiswa(nama, energi) {
    // cara menggunakan obejct.create
    let mahasiswa = Object.create(methodMahasiswa);
    mahasiswa.nama = nama;
    mahasiswa.energi = energi;

    // cara menghubungkan dengan object methodMahasiswa
    // mahasiswa.makan = methodMahasiswa.makan;
    // mahasiswa.main = methodMahasiswa.main;

    // mahasiswa.makan = function (porsi) {
    //     this.energi += porsi;
    //     console.log(`halo ${nama} Selamat makan`);
    // }

    // mahasiswa.main = function (jam) {
    //     this.energi -= jam;
    //     console.log(`halo ${nama} Selamat bermain`);
    // }

    return mahasiswa;
}

let nama1 = Mahasiswa('irpan', 20);
let nama2 = Mahasiswa('bagas', 10);
let nama3 = Mahasiswa('jono', 30);
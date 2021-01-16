// konsep this pada function

// function constructor 01

// const Mahasiswa = function () {
//     this.nama = 'irpan ramdani';
//     this.umur = 20;
//     console.log(this); // ini bukan lagi mengambil object window tetapi mengambil object mahasiswa
// }

// let mahasiswa1 = new Mahasiswa(); // memanggil function

// function constructor 02 dengan arrow function

// const siswa = () => {} ini tidak bisa dilakukan untuk function constructor karena tidak menyimpan konsep this
// const Siswa = function () {
//     this.nama = 'agvira aulia';
//     this.umur = 22;
//     this.sayHello = () => { // untuk method bisa dilakukan
//         console.log(`hallo nama saya ${this.nama} dan umur saya ${this.umur} saya berjodoh dengan irpan`);
//     }
// }

// let siswa1 = new Siswa();
// siswa1.sayHello();

// dengan object literal 03 dengan arrow function
// const mhs1 = {
//     nama: 'sabyan',
//     umur: 22,
// sayHello: () => {} ini tidak akan berjalan karena di variabel tidak ada this

//     sayHello: function () { // ini akan berjalan
//         console.log(`hallo nama saya ${this.nama} dan umur saya ${this.umur} saya berjodoh dengan irpan`);
//     }
// }

// console.log(mhs1);
// console.log(mhs1.sayHello());

// dengan function constructor 04
// const Mahasiswa = function () {
//     this.nama = 'irpan ramdani';
//     this.umur = 20;
//     this.sayHello = function () {
//         console.log(`hallo nama saya ${this.nama} dan umur saya ${this.umur} saya berjodoh dengan irpan`);
//     }

// ini akan kena hoisting dan menghasilkan NaN karena dia tidak cek ke this.umur yang ada di mahasiswa
// tetapi dia cek di global nya (window object) karena scope this kalau kita bikin function declaration
// setInterval(function () {
//     console.log(this.umur++);
// }, 500);

// kalau kita gunakan arrow function maka arrow function tidak punya konsep this
// maka dia akan mencari ke atas yang ada this.umur
//     setInterval(() => {
//         console.log(this.umur++);
//     }, 500);
// }

// let mahasiswa1 = new Mahasiswa();

// contoh kasus
const box = document.querySelector('.box');
box.addEventListener('click', function () {
    this.classList.toggle('size');

    // menambahkan classlist caption setelah 0.6 detik
    // setTimeout(function () {
    //     // this.classList.toggle('caption'); ini tidak berjalan karena berada di function declaration jadi kena hoisting
    //     // console.log(this); this ini berisi window bukan dari class caption
    // }, 600)

    // caranya kita gunakan arrow function setTimeout(() => {}
    setTimeout(() => {
        this.classList.toggle('caption');
    }, 600);
});

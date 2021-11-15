
// contoh penggunaan multi-line string

// tanpa back tick
// console.log('text01\ntext02');

// dengan back tick
// console.log(`text01
// text02`);

// contoh penggunaan html fragments

// membuat object
// const mahasiswa = {
//     nama: 'irpan ramdani',
//     umur: 20,
//     nim: 2113191069,
//     email: 'irfanrmdni209@gmail.com'
// };

// membuat elemen html tanpa back tick
// let elemen = '';
// elemen += '<div class="mahasiswa">';
// elemen += '<h2>' + mahasiswa.nama + '</h2>';
// elemen += '<span class="nim">' + mahasiswa.nim + '</span>';
// elemen += '</div>';

// membuat elemen html dengan back tick
// let elemen = `<div class="mahasiswa">
// <h2> ${mahasiswa.nama} </h2>
// <span class="nim"> ${mahasiswa.nim} </span>
// </div>`;

// console.log(elemen);
// document.write(elemen);


// contoh penggunaan embedded ekspression

// membuat variabel
const nama = 'irpan ramdani';
let umur = 21;

// tanpa back tick
// console.log('hallo nama saya ' + nama + ' umur saya ' + umur);

// dengan back tick
// console.log(`hallo nama saya ${nama} umur saya ${umur}`);

// contoh lain menampilkan alert
// console.log(`${alert(`hallo!`)}`);

// contoh lain menggunakan ternary operator
// const x = 16;
// console.log(` ${(x % 2 == 0) ? 'genap' : 'ganjil'} `);


// contoh penggunaan ekspression interpolation

// membuat variabel
// let a = 10;
// let b = 12;

// tanpa back tick
// console.log('hasil penjumlahan a + b adalah : ' + (a + b) + ' , bukan ' + (2 * a + b));

// dengan back tick
// console.log(`hasil penjumlahan a + b adalah :  ${a + b} bukan ${2 * a + b}`);

// ====================================================================================================================

// template literals
// const myName = 'irfan ramdani'
// const age = 21
// console.log(`hello world, my name is ${myName} and age ${age} years`)

// embedded expression
// console.log(`${alert('hallo')}`);
// const x = 311;
// console.log(`${x % 2 == 0 ? 'genap' : 'ganjil'}`);

// html fragments
const mhs = {
    nama: 'irfan ramdani',
    umur: 21,
    nim: '2113191069',
    email: 'irfanrmdni209@gmail.com'
}

// const elemen = [`<div class="mahasiswa">
// <h1 class="nama">${mhs.nama}</h1>
// <h4 class="umur">${mhs.umur}</h4>
// <h4 class="nim">${mhs.nim}</h4>
// <h4 class="email">${mhs.email}</h4>
// </div>`];

const container = document.querySelector('.container');

function Mhs(nama, umur, nim, email) {
    const elemen = `<div class="mahasiswa">
    <h1 class="nama">${nama}</h1>
    <h4 class="umur">${umur}</h4>
    <h4 class="nim">${nim}</h4>
    <h4 class="email">${email}</h4>
    </div>`;

    return elemen;
}

let mahasiswa_1 = Mhs('irfan ramdani', 21, '2113191069', 'irfanrmdni209@gmail.com');
let mahasiswa_2 = Mhs('zihan nur', 21, '2113191069', 'irfanrmdni209@gmail.com');
let mahasiswa_3 = Mhs('suci rahma', 21, '2113191069', 'irfanrmdni209@gmail.com');

container.innerHTML = mahasiswa_1 + mahasiswa_2 + mahasiswa_3;

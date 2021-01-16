
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


// contoh penggunaan embedded ekspression

// membuat variabel
// const nama = 'irpan ramdani';
// let umur = 13;

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


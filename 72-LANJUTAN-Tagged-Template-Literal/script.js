
// template literal
// const nama = 'irpan ramdani';
// const umur = 20;
// const kelamin = 'pria';

// ini akan mengambil isi dari template lietral dan dipicah/dipisahkan setiap ada ekspresi dan ekspresi nya gak akan dijalankan/masuk
// kalau tidak ada ekspresi maka tidak akan dipecah / hanya string saja satu
// function coba(strings) {
//     return strings;
// }

// dan ekspresi nya akan masuk sebagai parameter baru di function coba
// function coba(strings, nama, umur) {
//     return nama;
// }


// namun ketika punya ekspresi banyak kita bisa gunakan rest parameter untuk menampung seluruh ekspresi di template literal nya
// rest parameter/argumen (...nama_parameter) nah ini akan mengambil semua ekspresi di dalam template literal
// function coba(strings, ...values) {
//     return values;
// }


// untuk menampilkan strings dan values nya secara bersamaan 
// function coba(strings, ...values) {
//     // untuk menampung string dan digabungkan dengan values
//     let result = '';

//     // kita looping strings nya dan str untuk mengambil elemen array di strings nya dan i indeks nya buat looping isi values nya
//     strings.forEach((str, i) => {
//         // kita tambahkan result dengan str / string nya kemudian values nya dengan indeks ke i, i nya dari indeks ke 0 pada str/strings
//         result += `${str}${values[i] || ''}`; // operator or untuk menghilangkan undefined ketika values nya sudah habis/tidak ada lagi
//     });

//     return result;

//     // dengan menggunakan high order functiosn reduce
//     // result untuk menggabungkan seluruh isi array
//     // str elemen yang akan kita gabungkan yang ada dalam strings 
//     // i adalah indeks nya
//     return strings.reduce((result, str, i) => `${result}${str}${values[i] || ''}`, '');
// }


// template string ini akan masuk seolah-olah sebagai function coba
// const str = coba`nama saya ${nama} saya ${umur} tahun ${kelamin}`;
// console.log(str);

// membuat template literal menjadi tagged template
// 1. membuat function dan disimpan sebelum isi dari str 


// contoh kasus membuat highlight 

// const nama = 'irpan ramdani';
// const umur = 20;
// const email = 'irfanrmdni209@gmail.com';

// function coba(strings, ...values) {
//     return strings.reduce((result, str, i) => `${result}${str} <span class="highlight"> ${values[i] || ''} </span>`, '');
// }
// const str = coba`nama saya ${nama} saya ${umur} tahun dan email saya ${email}`;
// menampilkan di html
// document.body.innerHTML = str;

// ===============================================================================================================================================

// 1. Tagged templates

// const nama = 'irfan ramdani';
// const umur = 21;


// contoh 1
// untuk parameter nya itu harus sesuai dengan jumlah dari pemanggilan function coba
// function coba(strings, nama, umur) {
// return strings; // menampilkan bentuk array `hallo, nama saya, umur saya, tahun`
// return nama; // menamilkan nama saja
// return umur; // menamilkan umur saja
// }

// pemanggilan function coba
// const str = coba`hallo, nama saya ${nama} umur saya ${umur} tahun`;

// console.log(str);



// contoh 2
// const nama = 'irfan ramdani';
// const umur = 21;

// function cetak(strings, ...values) {
// return strings; // ?menampilkan bentuk array `hallo, nama saya, umur saya, tahun
// return values; // ?menampilkan nama dan umur saja 

// ?menampilkan semua isi strings dan values. karna strings bentuk array maka kita looping 
// let result = '';
// strings.forEach((str, idx) => {
//     result += `${str}${values[idx] || ''}`
// })
// return result;

// ?contoh dengan reduce
//     return strings.reduce((result, str, index) => `${result}${str}${values[index] || ''}`, '');
// }

// const str = cetak`hello, nama saya ${nama} umur saya ${umur} tahun`;

// console.log(str);



// ? contoh 3
const nama = 'irfan ramdani';
const umur = 21;
const email = 'irfanrmdni209@gmail.com';

function highlight(strings, ...values) {

    // return strings.reduce(function (result, str, idx) {
    //     return `${result}${str}${values[idx] || ''}`
    // }, '');

    return strings.reduce((result, str, idx) => `${result}${str} <span class="highlight">${values[idx] || ''}</span>`, '')
}

let str = highlight`hallo, nama saya ${nama} umur saya ${umur} tahun, dan email saya ${email}`;

// console.log(str);
document.body.innerHTML = str;

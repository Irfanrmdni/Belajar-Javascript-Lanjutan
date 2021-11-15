
// For .. Of

// penggunaan looping array

// const mhs1 = ['jelita', 'nabila', 'agvira'];

// looping biasa
// for (let i = 0; i < mhs1.length; i++) {
//     console.log(mhs1[i]);
// }


// looping forEach

// const mhs2 = ['kaka', 'kiki', 'koko'];

// // tanpa menggunakan indeks
// // mhs2.forEach((m) => console.log(m));

// // dengan menggunakan indeks
// mhs2.forEach((m, indeks) => {
//     console.log(`nama mahasiswa ${m} urutan ke ${indeks + 1}`);
// });


// // looping object iterable array

// // for (variabel untuk setiap elemen di dalam aray of nama array) {
// //     console.log(m);
// // }

// // const m adalah nama variabel untuk setiap elemen array dan mhs adalah nama array nya
// const mhs3 = ['dadang', 'agung', 'deni'];

// for (const m of mhs3) {
//     console.log(m);
// }


// // penggunaan looping string

// const nama = 'ading putra';

// // looping object iterable
// for (const n of nama) {
//     console.log(n);
// }

// // looping object iterable dengan memakai indeks
// const mhs4 = ['leon', 'gugum', 'devi'];

// // menggunakan method entries dan destructuring 
// for (const [i, m] of mhs4.entries()) { // i adalah indeks dan m adalah elemen array
//     console.log(`nama ${m} urutan ke-${i + 1}`);
// }

// // penggunaan looping NodeList
// const liNama = document.querySelectorAll('.nama');

// // looping dengan forEach
// // liNama.forEach(n => console.log(n.textContent));

// // looping dengan object iterable
// for (n of liNama) {
//     console.log(n.textContent);
// }



// // penggunaan looping arguments , arguments tidak bisa pakai forEach

// function jumlahAngka() {
//     // return arguments.reduce((a, i) => a + i); ini akan error
//     // return [1, 2, 3, 4].reduce((a, i) => a + i); kalo pake array bisa
//     // arguments.forEach(a => jumlah += a); ini akan error

//     let jumlah = 0;
//     // dengan object iterable arguments
//     for (a of arguments) {
//         jumlah += a;
//     }
//     return jumlah;
// }

// console.log(jumlahAngka(1, 2, 3, 4));



// // For .. in

// const mhs = {
//     nama: 'agus supratna',
//     umur: 20,
//     email: 'irfanrmdni209@gmail.com'
// };

// for (const m in mhs) {
//     // console.log(m); // kalau m nya saja maka akan mengambl indeks
//     console.log(mhs[m]); // kalau dengan mhs[m] akan mengambil nilai/value nya
// }

// =======================================================================================================================================

// ? object iterable Array
// const nama = ['irfan', 'zihan', 'ninda'];

// * dengan for biasa
// for (let i = 0; i < nama.length; i++) {
//     console.log(nama[i]);
// }


// * dengan forEach
// nama.forEach(m => console.log(m));


// * dengan for..of
// for (let n of nama) {
//     console.log(n);
// }



// ? object iterable String
// const nama = 'syafira';

// ! dengan forEach tidak bisa
// nama.forEach(m => console.log(m));

// * dengan for..of bisa
// for (let n of nama) {
//     console.log(n);
// }



// ? object iterable Array. dengan menggunakan index
// const nama = ['irfan', 'zihan', 'nindi'];

// * dengan forEach
// nama.forEach((n, idx) => {
//     console.log(`${n} adalah nama ke ${idx + 1}`);
// });


// * dengan for..of
// for (let [idx, n] of nama.entries()) {
//     console.log(`${n} adalah nama ke ${idx + 1}`);
// }



// ? object iterable nodeList
// const nama = document.querySelectorAll('.nama');

// * dengan forEach
// nama.forEach(n => console.log(n.textContent));

// * dengan for..of
// for (let n of nama) {
//     console.log(n.textContent);
// }



// ? object iterable arguments
function jumlahkanAngka() {
    // ! ini tidak bisa karna arguments bukan array
    // return arguments.reduce((acc, current) => acc + current);

    // * ini bisa karna array
    // return [1, 2, 3, 4, 5].reduce((acc, current) => acc + current);

    let jumlah = 0;

    // ! ini tidak bisa karna bukan array
    // arguments.forEach(n => jumlah += n);

    // * ini bisa karna array
    // [1, 2, 3, 4, 5].forEach(n => jumlah += n);

    // * ini bisa karna menggunakan for..of
    for (let n of arguments) {
        jumlah += n;
    }

    return jumlah;
}

console.log(jumlahkanAngka(1, 2, 3, 4, 5));



// ? for..in
// const mhs = {
//     nama: 'irfan',
//     umur: 21,
//     email: 'irfanrmdni209@gmail.com'
// }

//for (let n in mhs) {
    // * ini akan mengambil properti nya (nama,umur,email)
    // console.log(n);

    // * ini akan mengambil value nya
    // console.log(mhs[n]);
//}
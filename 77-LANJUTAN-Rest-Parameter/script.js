

// Rest Parameter

// contoh 01
// function myFunc(a, b, ...n) {
//     // return n; menghasilkan nilai array
//     return `nilai a = ${a} nilai b = ${b} sisanya ${n}`;
// }

// console.log(myFunc(1, 2, 3, 4, 5));


// // contoh 02 bukti bahwa function memiliki variabel arguments
// function coba() {
//     return arguments;
// }

// console.log(coba(1, 2, 3, 4, 5, 6));

// 03 cara agar mengubah agar arguments berbentuk array
// function ubah() {
//     // return Array.from(arguments);

//     // cara dengan spread operator
//     return [...arguments];
// }

// console.log(ubah(1, 2, 3, 4, 5, 6, 7));


// 04 menumlahkan semua angka di parameter
// function jumlahkan(...angka) {
//     // let total = 0;

//     // dengan menggunakan looping for of
//     // for (const a of angka) {
//     //     total += a;
//     // }

//     // dengan menggunakan high order function reduce
//     return angka.reduce((a, n) => a + n);

//     // return total;
// }

// console.log(jumlahkan(1, 2, 3, 4, 5));

// 05 penggunaan rest parameter pada array destructuring
// const kelompok = ['asep', 'yuli', 'jajang', 'agvira', 'popon'];

// const [ketua, wakil, ...anggota] = kelompok;

// console.log(ketua);
// console.log(anggota);

// 06 penggunaan rest parameter pada object destructuring
// const team = {
//     manager: 'irpan ramdani',
//     asisten: 'agvira',
//     desain: 'jajang',
//     sales: 'vani',
//     marketing: 'dania'
// };

// const { manager, ...myTeam } = team;

// console.log(manager);
// console.log(myTeam);

// 07 mencari tipe data yang ada dalam parameter menggunakan filter
// function filtering(tipe, ...values) {
//     return values.filter((f) => typeof f === tipe);
// }

// console.log(filtering('string', 10, true, -900, 812, false, 'joni', 12, 'dani'));
// console.log(filtering('number', 10, true, -900, 812, false, 'joni', 12, 'dani'));
// console.log(filtering('boolean', 10, true, -900, 812, false, 'joni', 12, 'dani'));

// ======================================================================================================================

// ? Rest parameter

// * rest parameter dengan 3 parameter. dan parameter terakhir (...n)
// * akan mengambil nilai 3,4,5
// function myFunc(a, b, ...n) {
//     return `nilai a : ${a} | b : ${b} | n : ${n}`;
// }

// console.log(myFunc(1, 2, 3, 4, 5));


// * rest parameter dengan 1 parameter yang akan mengambil semua nilai
// * bentuk nya akan menjadi array 
// function myFunc(...n) {
//     return n;
// }

// console.log(myFunc(1, 2, 3, 4, 5));


// * contoh selain menggunakan rest parameter.
// * dengan menggunakan arguments
//function myFunc() {
// ! karna arguments ini bentuk nya bukan array
// return arguments;

// ! kita ubah dulu arguments ke bentuk array
// return Array.from(arguments);
// return [...arguments];
//}

// console.log(myFunc(1, 2, 3, 4, 5));


// ? menjumlahkan nilai argument / nilai pada pemanggilan function
//function jumlahkan(...value) {
// * dengan menggunakan for..of
// let total = 0;
// for (let nilai of value) {
//     total += nilai;
// }
// return total;

// * dengan menggunakan high order function
// return value.reduce((acc, current) => acc + current);
//}

// console.log(jumlahkan(1, 2, 3, 4, 5));


// ? array destructuring
// * menentukan setiap nama pertama itu ketua. dan nama kedua wakil. sisanya anggota
// const kelompok = ['irfan', 'galih', 'jihan', 'fitri', 'dewi'];
// const [ketua, wakil, ...anggota] = kelompok;

// console.log(`KETUA : ${ketua}`);
// console.log(`WAKIL : ${wakil}`);
// console.log(`ANGGOTA : ${anggota}`);


// ? object destructuring
// * menentukan setiap nama pertama itu ketua. dan nama kedua wakil. sisanya anggota
// const team = {
//     projectManager: 'irfan',
//     frontEnd1: 'galih',
//     frontEnd2: 'jihan',
//     backend: 'nurfitri',
//     ux: 'agus',
//     devops: 'erick'
// };

// const { projectManager, ...myTeam } = team;

// console.log(myTeam);


// ? filtering
function filterBy(type, ...values) {
    return values.filter(function (value) {
        return typeof value === type;
    })
}

console.log(filterBy('number', true, 'irfan', 14.2, 'indonesia', false, 99, 71, 'sarijadi'));
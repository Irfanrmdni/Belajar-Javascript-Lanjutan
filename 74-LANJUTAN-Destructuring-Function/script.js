
// function tambahKali(x, y) {
//     // mengembalikan array
//     return [x + y, x * y];
// }

// // menampilkan semua hasil
// const hasil = tambahKali(10, 2);

// console.log(hasil);

// // menampilkan penjumlahan saja
// const hasilJumlah = tambahKali(10, 2)[0]; // pake indeks ke 0

// console.log(hasilJumlah);

// // menampilkan perkalian saja
// const hasilKali = tambahKali(10, 2)[1]; // pake indeks 1

// console.log(hasilKali);


// // 01 - Dengan Destructuring Function Array
// const [jumlah, kali] = tambahKali(22, 13);

// // akan menampilkan jumlah saja
// console.log(jumlah);

// // akan menampilkan kali saja
// console.log(kali);

// // 02 - Dengan Destructuring Array memberikan nilai default
// function kalkulasi(a, b) {
//     // return [a + b, a - b, a * b, a / b];  ketika a / b nya dihapus
//     return [a + b, a - b, a * b];
// };

// const [tambah, kurang, kalikan, bagi = 'default tidak ada'] = kalkulasi(12, 4);

// console.log(tambah);
// console.log(kurang);
// console.log(kalikan);
// console.log(bagi);

// // 03 - Dengan Destructuring Object
// function kalkulasi2(a, b) {
//     return {
//         tambah2: a + b,
//         kurang2: a - b,
//         kali2: a * b,
//         bagi2: a / b
//     };
// };

// const { tambah2, kurang2, kali2, bagi2 } = kalkulasi2(45, 23);

// console.log(tambah2);
// console.log(kurang2);
// console.log(kali2);
// console.log(bagi2);

// // 04 - Dengan Destructuring function arguments
// const mhs1 = {
//     nama: 'galih purnama',
//     umur: 20,
//     email: 'irfanrmdni@gmail.com'
// };

// // membuat function dengan arguments nama dan umur karena kita mau ambil 

// // cara 01 - memecah di paramater pemanggilan function nya
// // function cetakMhs(nama, umur) {
// //     return `hallo, nama saya ${nama}, umur saya ${umur}`;
// // }

// // menampilkan function dengan parameter nya mengambil dari object mhs1 (memecah di parameternya)
// // console.log(cetakMhs(mhs1.nama, mhs1.umur));

// // cara 02 - memecah di function nya
// // function cetakMhs(mhs1) {
// //     return `hallo, nama saya ${mhs1.nama}, umur saya ${mhs1.umur}`;
// // }

// // console.log(cetakMhs(mhs1));


// // cara 03 - memecah langsung object nya di parameter function 
// function cetakMhs({ nama, umur }) {
//     return `hallo, nama saya ${nama}, umur saya ${umur}`;
// };

// console.log(cetakMhs(mhs1));


// contoh 05 - Dengan Destructuring function arguments ketika punya lebih dari 1 object
// const siswa = {
//     nama: 'alia putri',
//     umur: 19,
//     email: 'aliaputri@gmail.com',
//     // membuat object lagi
//     nilai: {
//         uas: 42,
//         uts: 95,
//         tugas: 100
//     }
// };

// const siswa1 = {
//     nama: 'gagan ajah',
//     umur: 12,
//     email: 'gaganajah@gmail.com',
//     // membuat object lagi
//     nilai: {
//         uas: 62,
//         uts: 85,
//         tugas: 80
//     }
// };

// const siswa2 = {
//     nama: 'devi nur',
//     umur: 29,
//     email: 'devinur@gmail.com',
//     // membuat object lagi
//     nilai: {
//         uas: 92,
//         uts: 75,
//         tugas: 90
//     }
// };

// function printSiswa({ nama, umur, email, nilai: { uas, uts, tugas } }) {
//     return `nama saya ${nama} umur ${umur} email ${email} nilai : uas ${uas} uts ${uts} tugas ${tugas}`;
// }

// console.log(printSiswa(siswa1));

// // cara memanggil nya
// function cetakSiswa({ nama, umur, nilai: { uas, uts, tugas } }) {
//     return `hallo, nama saya ${nama}, umur saya ${umur}, nilai uas saya ${uas}, uts ${uts}, dan tugas ${tugas}`;
// }

// console.log(cetakSiswa(siswa));
// console.log(cetakSiswa(siswa1));
// console.log(cetakSiswa(siswa2));


// =========================================================================================================================

// ? Destructuring Function
// function tambahKali(a, b) {
//     return [a + b, a * b];
// }

// * menampilkan semua hasil nya
// const jumlah = tambahKali(2, 3);
// console.log(jumlah);

// * menampilkan hanya hasil tambah saja
// const jumlah = tambahKali(2, 3)[0];
// console.log(jumlah);

// * menampilkan hanya hasil kali saja
// const jumlah = tambahKali(2, 3)[1]
// console.log(jumlah);

// * Destructuring Assignment tambahKali kedalam variabel 
// const [tambah, kali] = tambahKali(2, 3);
// console.log(tambah);
// console.log(kali);


// ? Destructuring Assignment kalkulasi
function kalkulasi(a, b) {
    return [a + b, a - b, a * b, a / b];
}

// ! ini urutan variabel nya harus sesuai dengan return function kalkulasi nya
// const [tambah, kurang, kali, bagi] = kalkulasi(2, 3);
// console.log(tambah);
// console.log(kurang);
// console.log(kali);
// console.log(bagi);


// ? Destructuring Assignment kalkulasi. dengan memberi nilai default
// function kalkulasi(a, b) {
//     return [a + b, a - b, a * b];
// } 

// ! ini urutan nya harus sesuai dengan return function kalkulasi nya
// const [tambah, kurang, kali, bagi = 'tidak diketahui'] = kalkulasi(2, 3);
// console.log(tambah);
// console.log(kurang);
// console.log(kali);
// console.log(bagi);


// ? Destructuring Assignment kalkulasi. cara agar urutan nya tidak berpengaruh (gunakan return value nya object)
// function kalkulasi(a, b) {
//     return {
//         tambah: a + b,
//         kurang: a - b,
//         kali: a * b,
//         bagi: a / b
//     }
// }

// const { kali, bagi, kurang, tambah } = kalkulasi(2, 3);
// console.log(kali);


// ? Destructuring function arguments
// const buah = {
//     nama: 'semangka',
//     warna: 'merah',
//     rasa: 'manis'
// }

// * tanpa Destructuring
// function cetakBuah(nama, warna) {
//     return `Buah ${nama} adalah buah yang berwarna ${warna} dan memiliki ukuran besar`;
// }

// console.log(cetakBuah(buah.nama, buah.warna));

// * dengan Destructuring
// function cetakBuah({ nama, warna }) {
//     return `Buah ${nama} adalah buah yang berwarna ${warna} dan memiliki ukuran besar`;
// }

// console.log(cetakBuah(buah));

// ? Destructuring function arguments yang lebih kompleks
const mhs = {
    nama: 'irfan ramdani',
    nim: '2113191069',
    email: 'irfanrmdni209@gmail.com',
    nilai: {
        tugas: 85,
        uts: 65,
        uas: 90
    }
};

function cetakMhs({ nama, nim, email, nilai: { tugas, uts, uas } }) {
    return `nama saya ${nama} dengan nim ${nim} email ${email} dan nilai tugas ${tugas} uts ${uts} uas ${uas}`;
}

console.log(cetakMhs(mhs));
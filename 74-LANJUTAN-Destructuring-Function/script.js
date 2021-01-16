
function tambahKali(x, y) {
    // mengembalikan array
    return [x + y, x * y];
}

// menampilkan semua hasil
const hasil = tambahKali(10, 2);

console.log(hasil);

// menampilkan penjumlahan saja
const hasilJumlah = tambahKali(10, 2)[0]; // pake indeks ke 0

console.log(hasilJumlah);

// menampilkan perkalian saja
const hasilKali = tambahKali(10, 2)[1]; // pake indeks 1

console.log(hasilKali);


// 01 - Dengan Destructuring Function Array
const [jumlah, kali] = tambahKali(22, 13);

// akan menampilkan jumlah saja
console.log(jumlah);

// akan menampilkan kali saja
console.log(kali);


// 02 - Dengan Destructuring Array memberikan nilai default
function kalkulasi(a, b) {
    // return [a + b, a - b, a * b, a / b];  ketika a / b nya dihapus
    return [a + b, a - b, a * b];
};

const [tambah, kurang, kalikan, bagi = 'default tidak ada'] = kalkulasi(12, 4);

console.log(tambah);
console.log(kurang);
console.log(kalikan);
console.log(bagi);


// 03 - Dengan Destructuring Object
function kalkulasi2(a, b) {
    return {
        tambah2: a + b,
        kurang2: a - b,
        kali2: a * b,
        bagi2: a / b
    };
};

const { tambah2, kurang2, kali2, bagi2 } = kalkulasi2(45, 23);

console.log(tambah2);
console.log(kurang2);
console.log(kali2);
console.log(bagi2);


// 04 - Dengan Destructuring function arguments
const mhs1 = {
    nama: 'galih purnama',
    umur: 20,
    email: 'irfanrmdni@gmail.com'
};

// membuat function dengan arguments nama dan umur karena kita mau ambil 

// cara 01 - memecah di paramater pemanggilan function nya
// function cetakMhs(nama, umur) {
//     return `hallo, nama saya ${nama}, umur saya ${umur}`;
// }

// menampilkan function dengan parameter nya mengambil dari object mhs1 (memecah di parameternya)
// console.log(cetakMhs(mhs1.nama, mhs1.umur));

// cara 02 - memecah di function nya
// function cetakMhs(mhs1) {
//     return `hallo, nama saya ${mhs1.nama}, umur saya ${mhs1.umur}`;
// }

// console.log(cetakMhs(mhs1));

// cara 03 - memecah langsung object nya di parameter function 
function cetakMhs({ nama, umur }) {
    return `hallo, nama saya ${nama}, umur saya ${umur}`;
};

console.log(cetakMhs(mhs1));


// contoh 05 - Dengan Destructuring function arguments ketika punya lebih dari 1 object
const siswa = {
    nama: 'alia putri',
    umur: 19,
    email: 'aliaputri@gmail.com',
    // membuat object lagi
    nilai: {
        uas: 42,
        uts: 95,
        tugas: 100
    }
};

const siswa1 = {
    nama: 'gagan ajah',
    umur: 12,
    email: 'gaganajah@gmail.com',
    // membuat object lagi
    nilai: {
        uas: 62,
        uts: 85,
        tugas: 80
    }
};

const siswa2 = {
    nama: 'devi nur',
    umur: 29,
    email: 'devinur@gmail.com',
    // membuat object lagi
    nilai: {
        uas: 92,
        uts: 75,
        tugas: 90
    }
};

// cara memanggil nya
function cetakSiswa({ nama, umur, nilai: { uas, uts, tugas } }) {
    return `hallo, nama saya ${nama}, umur saya ${umur}, nilai uas saya ${uas}, uts ${uts}, dan tugas ${tugas}`;
}

console.log(cetakSiswa(siswa));
console.log(cetakSiswa(siswa1));
console.log(cetakSiswa(siswa2));
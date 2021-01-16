
// contoh 01 - Tanpa Destructuring array 
const buah1 = ['salak', 'kiwi', 'leci'];

const namaBuah1 = buah1[0]; // salak
const namaBuah2 = buah1[1]; // kiwi
const namaBuah3 = buah1[2]; // leci

console.log(namaBuah1);

// contoh 02 - Dengan Destructuring array 
const buah2 = ['semangka', 'duren', 'mangga'];

const [a, b, c] = buah2;

// console.log(a, b, c);
console.log(a); // semangka
console.log(b); // duren
console.log(c); // mangga

// contoh 03 - Dengan Destructuring array (dengan hanya mengambil beberapa nilai indeks array)
const buah3 = ['jeruk', 'lemon', 'melon', 'apel'];

const [jeruk, , , apel] = buah3; // lemon dan melon dilewati tetapi , nya tetap ada

console.log(jeruk);
console.log(apel);

// contoh 03 - Dengan Destructuring array swap/menukar indeks varibael
let x = 10;
let z = 5;

// sebelum di swap
console.log(x);
console.log(z);

[x, z] = [z, x];

// sesudah di swap
console.log(x);
console.log(z);

// contoh 04 - Dengan Destructuring array return value pada function
function buah() {
    return ['sawo', 'manggis'];
}

const [sawo, manggis] = buah();

console.log(sawo);
console.log(manggis);

// contoh 05 - Dengan Destructuring array rest parameter (ketika punya banyak elemen)
const [el, ...values] = [1, 2, 3, 4, 5]; // 1 akan masuk ke a dan sisanya akan masuk ke values

console.log(el);        // 1
console.log(values);    // [2, 3, 4, 5] berbentuk array

// ===========================================================================================

// contoh 01 - Destructuring object Assignment dengan membuat deklarasi object
const mhs = {
    nama: 'gunawan',
    umur: 20,
    alamat: 'sarijadi'
};

const { nama, umur, alamat } = mhs; // nama properti object nya harus sama

// console.log(nama, umur, alamat);
console.log(nama);
console.log(umur);
console.log(alamat);

// contoh 02 - Destructuring object Tanpa Assignment dengan membuat deklarasi object
({ namaMhs, umurMhs, alamatMhs, } = { namaMhs: 'ading', umurMhs: 20, alamatMhs: 'sarijadi' });

console.log(namaMhs);
console.log(umurMhs);
console.log(alamatMhs);

// contoh 03 - Destructuring object membuat agar nama properti nya berbeda / membuat properti baru / mengganti
const siswa = {
    namaSiswa: 'ujang',
    umurSiswa: 20
};

const { namaSiswa: n, umurSiswa: u } = siswa; // membuat nama properti nya berbeda

console.log(n);
console.log(u);

// contoh 04 - Destructuring object memberikan nilai default 
const siswaDua = {
    namaSiswaDua: 'daniel',
    umurSiswaDua: 10
    // emailSiswaDua: 'irfanrmdni209@gmail.com' ketika tidak ada emailSiswaDua maka nilai nya akan default@gmail.com
};

const { namaSiswaDua, umurSiswaDua, emailSiswaDua = 'default@gmail.com' } = siswaDua;

console.log(emailSiswaDua);

// contoh 05 - Destructuring object membuat properti baru / mengganti + memberikan nilai default
const siswaTiga = {
    namaSiswaTiga: 'sela',
    umurSiswaTiga: 40
    // emailSiswaTiga: 'marsela9992@gmail.com' // ketika tidak ada emailSiswaDua maka nilai nya akan default@gmail.com
};

const { namaSiswaTiga: ns3, umurSiswaTiga: us3, emailSiswaTiga: es3 = 'default@gmail.com' } = siswaTiga;

console.log(es3);

// contoh 06 - Destructuring object dengan rest parameter (ini berbentuk object)
const siswaEmpat = {
    namaSiswaEmpat: 'sela',
    umurSiswaEmpat: 40,
    emailSiswaEmpat: 'anggi@gmail.com',
    alamatSiswaEmpat: 'cihejo'
};

const { namaSiswaEmpat, ...all } = siswaEmpat;

console.log(namaSiswaEmpat);
console.log(all);

// contoh 07 - Destructuring object mengambil field pada object setelah dikirim sebagai parameter untuk function

const sekolah = {
    id: 2113191069,
    nama: 'asep',
    umur: 20
};

// membuat parameter 
// function getId(karyawan) {
//     return karyawan.id;
// }

// membuat parameter berbentuk object
function getId({ id }) {
    return id;
}

console.log(getId(sekolah));
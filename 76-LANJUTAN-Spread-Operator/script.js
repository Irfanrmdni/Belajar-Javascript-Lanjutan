

// Spread Operator

// membuat iterables array dan strings
// const mhs = ['acuy', 'nabila', 'tatang'];

// // ini yang tadinya array akan dipecah tiap-tiap elemen nya
// console.log(...mhs);

// // ini akan dipecah pada elemen indeks ke 0
// console.log(...mhs[1]);


// // membuat variabel 2 buah array
// const guru = ['asep', 'bagja', 'tuti'];
// const siswa = ['nanda', 'lia', 'ading'];


// // 01 - Spread Operator kita bisa gunakan untuk menggabungkan 2 buah array
// const sekolah = [...guru, ...siswa];

// console.log(sekolah);


// // 02 - menggabungkan 2 buah array dengan concat (hasilnya akan sama dengan Spread Operator)
// const sekolah2 = guru.concat(siswa);

// console.log(sekolah2);

// // 03 - namun menggunakan spread operator itu lebih fleksibel kita bisa menambahkan elemen array baru
// const sekolah3 = [...guru, 'jajang', 'kurnia', ...siswa];

// console.log(sekolah3);


// // 04 - Spread Operator meng-copy array
// const hewan = ['gajah', 'kucing', 'koala'];

// const jenis = [...hewan];

// // kelebihan nya kita bisa mengubah array yang di copy (jenis) tanpa harus mengubah array dari (hewan)
// jenis[1] = 'jerapah';
// jenis[0] = 'anjing';

// // ini elemen asalnya nya tidak akan berubah
// console.log(hewan);

// // ini elemen yang di copy nya akan berubah
// console.log(jenis);


// // 05 - Spread Operator mengubah elemen HTML li menjadi array
// const li = document.querySelectorAll('li');
// const name = [];

// // cara 01 - dengan menggunakan for
// for (let i = 0; i < li.length; i++) {
//     name.push(li[i].textContent);
// }

// console.log(name);

// // cara 02 - dengan menggunakan map (karena li nodeList kita harus buat li nya menjadi array)
// const name2 = [...li].map((n) => n.textContent);

// console.log(name2);

// // 06 - Spread Operator membuat animasi text hover kepada setiap huruf
// const textNama = document.querySelector('.nama');

// // kita pecah text nya menjadi per huruf
// // kita looping menggunakan map dan buat setiap huruf kedalam elemen span 
// // kita ubah menjadi string dengan join
// const pecahNama = [...textNama.textContent].map((p) => `<span>${p}</span>`).join('');

// // kita buat innerHTML textNama nya menjadi pecahNama
// textNama.innerHTML = pecahNama;


// ========================================================================================================================

// ? Spread Operator

// const mhs = ['irfan', 'erik', 'ujang'];

// console.log(mhs);        //* ['irfan', 'erik', 'ujang']
// console.log(...mhs);     //* irfan erik ujang
// console.log(...mhs[0]);  //* i r f a n



// ? menggabungkan 2 array
// const mhs = ['irfan', 'erik', 'ujang'];
// const dosen = ['dosen rizal', 'dosen gunawan', 'dosen agus'];

// ! digabung dengan spread operator
// const gabung = [...mhs, ...dosen];
// console.log(gabung);     //* ['irfan', 'erik', 'ujang','dosen rizal', 'dosen gunawan', 'dosen agus']
// console.log(...gabung);  //* irfan erik ujang dosen rizal dosen gunawan dosen agus

// ! digabung dengan spread operator. dengan menambahkan array baru
// const gabung = [...mhs, 'mulyani', ...dosen];
// console.log(gabung);      //* ['irfan', 'erik', 'ujang','mulyani','dosen rizal', 'dosen gunawan', 'dosen agus']

// ! digabung dengan concat
// const gabung = mhs.concat(dosen);
// console.log(gabung);     //* ['irfan', 'erik', 'ujang','dosen rizal', 'dosen gunawan', 'dosen agus']



// ? meng-copy nilai pada array
// const mhs = ['irfan', 'erik', 'ujang'];

// ! ini tidak benar-benar meng-copy. dan array mhs juga akan ikut berubah
// const mhs1 = mhs;
// mhs1[0] = 'gunawan';
// console.log(mhs);

// ! dengan spread operator ini akan benar-benar meng-copy dan array mhs tidak ikut berubah
// const mhs1 = [...mhs];
// mhs1[0] = 'gunawan';
// console.log(mhs1);



// ? mengambil nama dari elemen html li
// const liMhs = document.querySelectorAll('li');

// console.log(liMhs);

// * mengambil isi text dari elemen html li
// console.log(liMhs[1].textContent);

// * mengambil isi text dari elemen html li. dengan looping for
// const mhs = [];
// for (let i = 0; i < liMhs.length; i++) {
//     mhs.push(liMhs[i].textContent);
// }

// console.log(mhs);

// * mengambil isi text dari elemen html li. dengan map
// ! ini akan error karna bentuknya nodeList
// const mhs = liMhs.map(mahasiswa => mahasiswa.textContent);

// ! kita ubah dulu ke spread operator agar menjadi bentuk array
// const mhs = [...liMhs].map(mahasiswa => mahasiswa.textContent);
// console.log(mhs);



// ? membuat animasi hover per huruf pada text
const text = document.querySelector('.nama');
const huruf = [...text.textContent].map(function (m) {
    return `<span>${m}</span>`
}).join('');

text.innerHTML = huruf;
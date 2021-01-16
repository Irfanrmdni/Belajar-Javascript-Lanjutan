

// Spread Operator

// membuat iterables array dan strings
const mhs = ['acuy', 'nabila', 'tatang'];

// ini yang tadinya array akan dipecah tiap-tiap elemen nya
console.log(...mhs);

// ini akan dipecah pada elemen indeks ke 0
console.log(...mhs[0]);


// membuat variabel 2 buah array
const guru = ['asep', 'bagja', 'tuti'];
const siswa = ['nanda', 'lia', 'ading'];


// 01 - Spread Operator kita bisa gunakan untuk menggabungkan 2 buah array
const sekolah = [...guru, ...siswa];

console.log(sekolah);


// 02 - menggabungkan 2 buah array dengan concat (hasilnya akan sama dengan Spread Operator)
const sekolah2 = guru.concat(siswa);

console.log(sekolah2);


// 03 - namun menggunakan spread operator itu lebih fleksibel kita bisa menambahkan elemen array baru
const sekolah3 = [...guru, 'jajang', 'kurnia', ...siswa];

console.log(sekolah3);


// 04 - Spread Operator meng-copy array
const hewan = ['gajah', 'kucing', 'koala'];

const jenis = [...hewan];

// kelebihan nya kita bisa mengubah array yang di copy (jenis) tanpa harus mengubah array dari (hewan)
jenis[1] = 'jerapah';
jenis[0] = 'anjing';

// ini elemen asalnya nya tidak akan berubah
console.log(hewan);

// ini elemen yang di copy nya akan berubah
console.log(jenis);


// 05 - Spread Operator mengubah elemen HTML li menjadi array
const li = document.querySelectorAll('li');
const name = [];

// cara 01 - dengan menggunakan for
for (let i = 0; i < li.length; i++) {
    name.push(li[i].textContent);
}

console.log(name);

// cara 02 - dengan menggunakan map (karena li nodeList kita harus buat li nya menjadi array)
const name2 = [...li].map((n) => n.textContent);

console.log(name2);


// 06 - Spread Operator membuat animasi text hover kepada setiap huruf
const textNama = document.querySelector('.nama');

// kita pecah text nya menjadi per huruf
// kita looping menggunakan map dan buat setiap huruf kedalam elemen span 
// kita ubah menjadi string dengan join
const pecahNama = [...textNama.textContent].map((p) => `<span>${p}</span>`).join('');

// kita buat innerHTML textNama nya menjadi pecahNama
textNama.innerHTML = pecahNama;
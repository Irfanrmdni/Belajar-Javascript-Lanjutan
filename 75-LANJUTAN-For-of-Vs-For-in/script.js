
// For .. Of

// penggunaan looping array

const mhs1 = ['jelita', 'nabila', 'agvira'];

// looping biasa
for (let i = 0; i < mhs1.length; i++) {
    console.log(mhs1[i]);
}



// looping forEach

const mhs2 = ['kaka', 'kiki', 'koko'];

// tanpa menggunakan indeks
// mhs2.forEach((m) => console.log(m));

// dengan menggunakan indeks
mhs2.forEach((m, indeks) => {
    console.log(`nama mahasiswa ${m} urutan ke ${indeks + 1}`);
});


// looping object iterable array

// for (variabel untuk setiap elemen di dalam aray of nama array) {
//     console.log(m);
// }

// const m adalah nama variabel untuk setiap elemen array dan mhs adalah nama array nya
const mhs3 = ['dadang', 'agung', 'deni'];

for (const m of mhs3) {
    console.log(m);
}



// penggunaan looping string

const nama = 'ading putra';

// looping object iterable
for (const n of nama) {
    console.log(n);
}

// looping object iterable dengan memakai indeks
const mhs4 = ['leon', 'gugum', 'devi'];

// menggunakan method entries dan destructuring 
for (const [i, m] of mhs4.entries()) { // i adalah indeks dan m adalah elemen array
    console.log(`nama ${m} urutan ke-${i + 1}`);
}



// penggunaan looping NodeList
const liNama = document.querySelectorAll('.nama');

// looping dengan forEach
// liNama.forEach(n => console.log(n.textContent));

// looping dengan object iterable
for (n of liNama) {
    console.log(n.textContent);
}



// penggunaan looping arguments , arguments tidak bisa pakai forEach

function jumlahAngka() {
    // return arguments.reduce((a, i) => a + i); ini akan error
    // return [1, 2, 3, 4].reduce((a, i) => a + i); kalo pake array bisa
    // arguments.forEach(a => jumlah += a); ini akan error

    let jumlah = 0;
    // dengan object iterable arguments
    for (a of arguments) {
        jumlah += a;
    }
    return jumlah;
}

console.log(jumlahAngka(1, 2, 3, 4));



// For .. in

const mhs = {
    nama: 'agus supratna',
    umur: 20,
    email: 'irfanrmdni209@gmail.com'
};

for (const m in mhs) {
    // console.log(m); // kalau m nya saja maka akan mengambl indeks
    console.log(mhs[m]); // kalau dengan mhs[m] akan mengambil nilai/value nya
}
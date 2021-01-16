
// HTML Fragments

// membuat object
// const Mhs = {
//     nama: 'irpan ramdani',
//     umur: 20,
//     nim: 2113191069,
//     email: 'irfanrmdni209@gmail.com'
// };
// // membuat elemen
// const elemen = `<div class="mhs">
//     <h2>${Mhs.nama}</h2>
//     <span class="nim">${Mhs.nim}</span>
// </div>`;
// // menampilkan di HTML
// document.body.innerHTML = elemen;

// ketika membat object lebih dari 1 kita gunakan metode array yang didalamnya berisi object
// const mhs = [
//     {
//         nama: 'irpan ramdani',
//         umur: 20,
//         nim: 2113191069
//     },
//     {
//         nama: 'jojon junior',
//         umur: 40,
//         nim: 2113989062
//     },
//     {
//         nama: 'Khaddejah',
//         umur: 18,
//         nim: 2113879204
//     },
//     {
//         nama: 'Nabila safitri',
//         umur: 30,
//         nim: 21131818765
//     }

// ];

// membuat elemen dengan metode looping map
// const elemen = `<div class="mhs">
// ${mhs.map((el) => `<ul>
//     <li>${el.nama}</li>
//     <li>${el.umur}</li>
//     <li>${el.nim}</li>
//     </ul>`).join('')}
// </div>`;


// membuat pengkondisian dengan ternary
// const lagu = {
//     judul: 'tetap dalam jiwa',
//     penyanyi: 'irpan ramdani',
// feat: 'agvira'
// }

// const elemen = `<div class="lagu">
//     <ul>
//         <li>${lagu.judul}</li>
//         <li>${lagu.penyanyi} ${lagu.feat ? `(feat.${lagu.feat})` : ''}</li>
//     </ul>
// </div>`


// membuat fragments html bersarang (nested)
const mhs = {
    nama: 'irpan ramdani',
    semester: 5,
    matakuliah: [
        'rekayasa web',
        'software enginner',
        'video editing',
        'ui/ux design'
    ]
}

// membuat function untuk mengambil matakuliah dan disimpan ke el

function cetakMataKuliah(matakuliah) {
    return `<ol>
        ${(matakuliah).map(mk => `<li>${mk}</li>`).join('')}
    </ol>`;

}

const el = `<div class="mhs">
    <h2>${mhs.nama}</h2>
    <span class="semester">semester ${mhs.semester}</span>
    <h4>Mata kuliah</h4>
    ${cetakMataKuliah(mhs.matakuliah)}
</div>`;

document.body.innerHTML = el;
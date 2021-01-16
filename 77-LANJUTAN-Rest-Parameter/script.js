

// Rest Parameter

// contoh 01
function myFunc(a, b, ...n) {
    // return n; menghasilkan nilai array
    return `nilai a = ${a} nilai b = ${b} sisanya ${n}`;
}

console.log(myFunc(1, 2, 3, 4, 5));



// contoh 02 bukti bahwa function memiliki variabel arguments
function coba() {
    return arguments;
}

console.log(coba(1, 2, 3, 4, 5, 6));



// 03 cara agar mengubah agar arguments berbentuk array
function ubah() {
    // return Array.from(arguments);

    // cara dengan spread operator
    return [...arguments];
}

console.log(ubah(1, 2, 3, 4, 5, 6, 7));


// 04 menumlahkan semua angka di parameter
function jumlahkan(...angka) {
    // let total = 0;

    // dengan menggunakan looping for of
    // for (const a of angka) {
    //     total += a;
    // }

    // dengan menggunakan high order function reduce
    return angka.reduce((a, n) => a + n);

    // return total;
}

console.log(jumlahkan(1, 2, 3, 4, 5));


// 05 penggunaan rest parameter pada array destructuring
const kelompok = ['asep', 'yuli', 'jajang', 'agvira', 'popon'];

const [ketua, wakil, ...anggota] = kelompok;

console.log(ketua);
console.log(anggota);



// 06 penggunaan rest parameter pada object destructuring
const team = {
    manager: 'irpan ramdani',
    asisten: 'agvira',
    desain: 'jajang',
    sales: 'vani',
    marketing: 'dania'
};

const { manager, ...myTeam } = team;

console.log(manager);
console.log(myTeam);


// 07 mencari tipe data yang ada dalam parameter menggunakan filter
function filtering(tipe, ...values) {
    return values.filter((f) => typeof f === tipe);
}

console.log(filtering('string', 10, true, -900, 812, false, 'joni', 12, 'dani'));
console.log(filtering('number', 10, true, -900, 812, false, 'joni', 12, 'dani'));
console.log(filtering('boolean', 10, true, -900, 812, false, 'joni', 12, 'dani'));
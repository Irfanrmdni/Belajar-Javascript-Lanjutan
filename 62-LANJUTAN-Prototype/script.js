// Prototype dengan menggunakan function constructor

// // dibalik menggunakan this
// function jenisBuah(nama, berat) {
//     // 1. let buah = object.create()                    <- dengan object.create
//     // 2. let buah = {}                                 <- dengan object biasa 
//     // 3. let this = object.create(jenisBuah.prototype) <- dengan object this 

//     this.nama = nama;
//     this.berat = berat;

//     // return jenisBuah; <- ini tidak perlu
// }

// function jenisBuah(nama, berat) {
//     this.nama = nama;
//     this.berat = berat;
// }

// // membuat method nya cukup panggil object prototype
// jenisBuah.prototype.makan = function (porsi) {
//     this.berat -= porsi;
//     return `anda memakan buah ${this.nama} selamat makan`;
// }

// jenisBuah.prototype.tambah = function (tambahBuah) {
//     this.berat += tambahBuah;
//     return `anda menambah buah ${this.nama} ${tambahBuah} jadi bertambah`;
// }

// let anggur = new jenisBuah('anggur', 10);

// dengan menggunakan versi class
class jenisBuah {
    constructor(nama, berat) {
        this.nama = nama;
        this.berat = berat;
    }
    // membuat method
    makan(porsi) {
        this.berat -= porsi;
        return `anda memakan buah ${this.nama} selamat makan`;
    }
    tambah(tambahBuah) {
        this.berat += tambahBuah;
        return `anda menambah buah ${this.nama} ${tambahBuah} jadi bertambah`;
    }
}

let anggur = new jenisBuah('anggur', 10);
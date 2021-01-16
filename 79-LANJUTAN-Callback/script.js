
// Callback

// 01   -   Contoh Synchronous Callback
// function halo(nama) {
//     alert(`Halo, ${nama}`);
// }

// function tampilPesan(callback) {
//     const nama = prompt('masukan nama : ');
//     callback(nama);
// }

// tampilPesan(halo);



// 02   -   cara Synchronous membuat progarm eksekusi nya lama 

// const mhs = [
//     {
//         "nama": "irpan ramdani",
//         "nrp": "2113191069",
//         "email": "irfanrmdni209@gmail.com",
//         "jurusan": "teknik informatika",
//         "idDosenWali": 1
//     },
//     {
//         "nama": "Dori harsa",
//         "nrp": "2113191765",
//         "email": "doriharsa@gmail.com",
//         "jurusan": "teknik informatika",
//         "idDosenWali": 2
//     },
//     {
//         "nama": "Joni halis",
//         "nrp": "2113191233",
//         "email": "jonihalis@gmail.com",
//         "jurusan": "teknik informatika",
//         "idDosenWali": 3
//     }

// ];

// ini Synchronous  
// 1. program pertama dijalankan - selesai
// console.log('mulai');

// 2. program selanjutnya dieksekusi tapi ini akan membuat agar program dieksekusi nya lama, jadi nunggu waktu lama - selesai
// mhs.forEach(m => {
//     for (let i = 0; i < 10000000; i++) {
//         let date = new Date();
//     }
//     console.log(m.nama);
// });

// 3. setelah menunggu lama baru bisa mengeksekusi program dibawah ini 
// console.log('selesai');

// =======================================================================================================================================

// 03   -   cara Asynchronous Callback 

// 1. url adalah untuk menerima alamat data JSON nya
// 2. function success (callback) adalah ketika function nya berhasil mau menjalankan apa... dan sama juga untuk error
/* function getDataMahasiswa(url, success, error) {
    // menjalankan AJAX
    let xhr = new XMLHttpRequest();

    // ketika state nya sudah siap, jalankan function berikut
    xhr.onreadystatechange = function () {
        // ini maksud nya ketika akan melakukan request secara Aynchronous menggunakan AJAX
        if (xhr.readyState === 4) { // kalau readyState nya 4 itu artinya sudah ready karena perubahan state itu dimulai dari 0 - 4
            // 200 itu artinya sudah oke , bisa mengakses sebuah halaman , (halaman data JSON)
            if (xhr.status === 200) {
                // maka kalau sudah oke saya butuh response nya
                success(xhr.response); // jadi kalau sudah berhasil response nya maka jalankan function success
            }
            // tapi jika status nya error
            else if (xhr.status === 404) {
                error(); // jalankan function error
            }
        }
    }

    // menjalankan AJAX VANILA javascript
    // open(method nya mau apa , url nya kemana) => method nya get dan url nya akan masuk ke function url callback getDataMahasiswa
    xhr.open('get', url);
    // lalu kita send
    xhr.send()
}

// kita panggil function nya getDataMahasiswa

// buat function nya
function success(results) {
    // console.log(results); ini akan tampilnya berbentuk object

    // kita akan ubah ke bentuk object dengan JSON.parse
    // console.log(JSON.parse(results));

    // tapi kita mau mengambil hanya nama nya saja
    // const mhs = JSON.parse(results);
    mhs.forEach((m) => console.log(m.nama));
}

function error(e) {
    console.log(e.responseText);
}

getDataMahasiswa('data/mahasiswa.json', success, error); */


// ========================================================================================================================================

// 04   -   Perbedaan cara antara Asynchronous dan Synchronous

// 1. Synchronous
// console.log('mulai');                        <- task 1

//  mhs.forEach(m => {                          <- task 2
//     for (let i = 0; i < 10000000; i++) {
//         let date = new Date();
//     }
//     console.log(m.nama);
// });

// console.log('selesai');                      <- task 3

// Synchronous akan menjalankan task 1 sampai task 1 nya sudah selesai dieksekusi kemudian akan lanjut ke task berikutnya
// jadi yang akan ditampilkan task 1 , task 2 , task 3

// 2. Asynchronous
// console.log('mulai');                                        <- task 1

// getDataMahasiswa('data/mahasiswa.json', success, error);     <- task 2

// console.log('selesai');                                      <- task 3

// Asynchronous akan menjalankan task 1 dan task 3 sedangkan task 2 itu disimpan dulu ke WEB API - masuk ke callback qeue - masuk ke event loop
// baru masuk ke stack sehingga task 2 itu di skip. jadi yang akan ditampilkan task 1 , task 3 , task 2


// ========================================================================================================================================

// 05   -   cara dengan menggunakan JQuery  (tidak perlu ubah ke JSON object)
console.log('mulai');

$.ajax({
    url: 'data/mahasiswa.json',
    success: function (mhs) {
        mhs.forEach((m) => console.log(m.nama));
    },
    error: function (e) {
        console.log(e.responseText);
    }
});

console.log('selesai'); 
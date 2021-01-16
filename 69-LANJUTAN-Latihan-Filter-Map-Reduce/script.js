// langkah
// 1. ambil elemen semua video (cari elemen yang punya attribute data-duration)
// karena dia nodeList beda dengan array dia tidak bisa menggunakan filter map & reduce
// const videos = document.querySelectorAll('[data-duration]');
// makanya kita harus mengubah ke array
// const videos = Array.from(document.querySelectorAll('[data-duration]'));

// 2. pilih yang hanya JAVASCRIPT LANJUTAN
// dengan menggunakan filter
// const jsLanjut = videos.filter(function (video) {
//     // cari video yang textContent nya / yang memiliki text terdapat tulisan JAVASCRIPT LANJUTAN
//     return video.textContent.includes('JAVASCRIPT LANJUTAN');
// });


// 3. ambil durasi masing-masing video JAVASCRIPT LANJUTAN (yang dimabil string)
// dengan menggunakan map
// kita ambil data nya (data-) dari li dengan dataset lalu data nya kita ambil duration
// const durasi = jsLanjut.map(function (waktu) {
//     return waktu.dataset.duration;
// });

// 4. ubah durasi menjadi integer, ubah menit jadi detik
// const ubahDurasi = durasi.map(function (ubahWaktu) {
//     // kita gak butuh 11:18 -> : nya maka kita pecah menjadi array [11 , 18]
//     const pecahWaktu = ubahWaktu.split(':');
//     // setelah dipecah menjadi [11 , 18]
//     // kita kalikan pecahWaktu indeks ke 0 dengan * 60 dan tambah dengan indeks ke 1
//     // karena ini string maka ketika menjumlahkan string yang isi nya angka
//     // maka tidak akan melakukan operasi matematika misal 166 + 10 = 16610
//     // kita ubah dulu ke float / int 
//     return (parseFloat(pecahWaktu[0] * 60)) + parseFloat((pecahWaktu[1]));

// });

// 5. jumlahkan semua detik nya
// let totalDurasi = ubahDurasi.reduce(function (accumulator, currentValue) {
//     return accumulator + currentValue;
// });

// 6. ubah format dari detik menjadi jam menit detik
// kita bagi total durasi dengan 1 jam tetapi memakai detik jadi 3600 
// kita ubah/bulatkan menjadi bilangan bulat / tanpa koma
// const jam = Math.floor(totalDurasi / 3600);

// untuk mengambil menit kita harus mengambil sisa dari jam nya yaitu 2 jam (3600 * 2 = 7200) 
//  totalDurasi - jam * 3600 atau totalDurasi - 7200
// totalDurasi = totalDurasi - jam * 3600;
// const menit = Math.floor(totalDurasi / 60);

// const detik = Math.floor(totalDurasi - menit * 60);

// 7. simpan di DOM (class total-durasi )
// panggil class total-durasi nya
// const totalDurasiVideo = document.querySelector('.total-durasi');
// totalDurasiVideo.innerHTML = `${jam} jam ${menit} menit ${detik} detik`;

// 8. menentukan jumlah video
// const jumlahVideo = document.querySelector('.jumlah-video');
// jumlahVideo.innerHTML = `${jsLanjut.length}`;


// dengan cara arrow function
// 1. ambil elemen semua video (cari elemen yang punya attribute data-duration)
const videos = Array.from(document.querySelectorAll('[data-duration]'));
// 2. pilih yang hanya JAVASCRIPT LANJUTAN
let jsLanjutan = videos.filter((video) => video.textContent.includes('JAVASCRIPT LANJUTAN'))
    // 3. ambil durasi masing-masing video JAVASCRIPT LANJUTAN (yang dimabil string)
    .map((durasi) => durasi.dataset.duration)
    // 4. ubah durasi menjadi integer, ubah menit jadi detik
    .map((waktu) => {
        const pecah = waktu.split(':');
        return parseFloat(pecah[0] * 60) + parseFloat(pecah[1]);
    })
    // 5. jumlahkan semua detik nya
    .reduce((acc, curr) => acc + curr);
// 6. ubah format dari detik menjadi jam menit detik
const jam = Math.floor(jsLanjutan / 3600);
jsLanjutan = jsLanjutan - jam * 3600;
const menit = Math.floor(jsLanjutan / 60);
const detik = Math.floor(jsLanjutan - menit * 60);
// 7. simpan di DOM (class total-durasi )
const totalDurasiVideo = document.querySelector('.total-durasi');
totalDurasiVideo.innerHTML = `${jam} jam ${menit} menit ${detik} detik`;
// 8. menentukan jumlah video
const jumlahVideo = videos.filter((video) => video.textContent.includes('JAVASCRIPT LANJUTAN')).length;
const jmlVideo = document.querySelector('.jumlah-video');
jmlVideo.innerHTML = `${jumlahVideo} video`;
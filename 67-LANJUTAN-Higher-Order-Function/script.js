
// contoh membuat function dari argumen selesai

// function tugas ini disebut Higher Order Function
// function dari argumen selesai ini disebut callback

function tugas(pelajaran, selesai) {
    console.log(`Mulai mengerjakan tugas ${pelajaran} ....`);
    selesai(); // parameter nya dibuat seperti ini
}

// membuat function untuk argumen selesai
function selesai() {
    alert(`anda selesai mengerjakan tugas`);
}

// kita panggil dan jalankan
tugas('matematika', selesai);

// contoh 02
// setTimeout ini disebut juga Higher Order Function callback nya function ()
setTimeout(function () {
    console.log('hello world!');
}, 1000);

// contoh 03 
// addEventListener ini disebut juga Higher Order Function callback nya function ()
const tombol = document.querySelector('.tombol');
tombol.addEventListener('click', function () {
    console.log('tombol ditekan');
})

// contoh 04
// ucapkanSalam ini disebut juga Higher Order karena ada return value yang juga function
function ucapkanSalam(waktu) {
    return function (nama) {
        console.log(`halo ${nama} selamat ${waktu}`);
    }
}

let pagi = ucapkanSalam('pagi');
console.log(pagi('irpan'));
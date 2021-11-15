
// contoh 01
// let ditepati = true;

// const janji = new Promise((resolve, reject) => {
//     if (ditepati) {
//         resolve('janji ditepati');
//     } else {
//         reject('janji tidak ditepati');
//     }
// });

// console.group(janji);

// menampilkan console.log nya didalam then dan catch
// janji
//     .then(Response => console.log('Ok! ' + Response))
//     .catch(Response => console.log('NOT OK! ' + Response));

// contoh 02 dengan membuat pending / menunggu proses dulu
// let ditepati2 = false;

// const janji2 = new Promise((resolve, reject) => {
//     if (ditepati2) {
//         setTimeout(() => {
//             resolve('janji ditepati');
//         }, 2000)
//     } else {
//         setTimeout(() => {
//             reject('janji tidak ditepati');
//         }, 2000)
//     }
// });

// supaya terlihat Asyncrhonous
// console.log('mulai');

// menampilkan pending nya
// console.log(janji2.then(() => console.log(janji2)));

// langsung menampilkan / menjalankan janji2
// janji2
//     .finally(() => console.log('selesai menunggu!'))
//     .then(Response => console.log('OK ' + Response))
//     .catch(Response => console.log('NOT OK ' + Response));

// console.log('selesai');

// contoh 03 - PromiseAll() untuk memanggil sekaligus ketika punya banyak data / API 

// DATA / API 1
// const film = new Promise(resolve => {
//     setTimeout(() => {
//         resolve([{
//             judul: 'toy story',
//             sutradara: 'irpan',
//             pemeran: 'galih,ujang'
//         }]);
//     }, 1000);
// });

// DATA / API 2
// const cuaca = new Promise(resolve => {
//     setTimeout(() => {
//         resolve([{
//             wilayah: 'kota bandung',
//             temp: 30,
//             kondisi: 'cerah berawan'
//         }]);
//     }, 1000);
// });

// memanggil sekaligus DATA / API
// Promise.all([film, cuaca])
//     // ini berisi array dan menampilkan sekaligus semua data / API
//     // .then(Response => console.log(Response));

//     // tetapi kalau mau dibuat secara terpisah maka kita gunakan spread untuk memecah array
//     .then(Response => {
//         const [film, cuaca] = Response;
//         console.log(film);
//         console.log(cuaca);
//     });


// ==============================================================================================================================

// ? contoh mengambil data API menggunakan fetch API
// const movies = fetch('http://www.omdbapi.com/?apikey=[yourkey]&')
//     .then(response => response.json())
//     .then(response => console.log(response));

// ? promise

// * contoh 1
// let ditepati = false;
// const janji1 = new Promise(function (resolve, reject) {
//     if (ditepati) {
//         resolve('janji telah ditepati');
//     } else {
//         reject('ingkar janji');
//     }
// });

// console.log(janji1);
// janji1
//     .then(function (response) {
//         console.log(`OK! ` + response);
//     }).catch(function (response) {
//         console.log(`NO! ` + response);
//     });


// * contoh 2
// let ditepati = true;
// const janji2 = new Promise(function (resolve, reject) {
//     if (ditepati) {
//         setTimeout(function () {
//             resolve('ditepati setelah 2 detik');
//         }, 2000);
//     } else {
//         setTimeout(function () {
//             reject('tidak ditepati setelah 2 detik');
//         }, 2000);
//     }
// });

// console.log('mulai');

// * akan pending dulu selama 2 detik. dan langsung menjalankan resolve bentuknya promise
// console.log(janji2.then(function () {
//     console.log(janji2);
// }));

// * akan pending dulu selama 2 detik. dan langsung menjalankan resolve
// janji2
//     .finally(function () {
//         console.log('selesai menunggu ');
//     })
//     .then(function (response) {
//         console.log(`OK! ` + response);
//     }).catch(function (response) {
//         console.log(`NO! ` + response);
//     });

// console.log('selesai');


// ? promise.all

// * API 1
const movies = new Promise(function (resolve) {
    setTimeout(function () {
        resolve([
            {
                judul: 'avengers',
                sutradara: 'irfan',
                pemeran: 'galih',
                aktor: 'wiguna, erik'
            }
        ]);
    }, 1000)
});

// * API 2
const weather = new Promise(function (resolve) {
    setTimeout(function () {
        resolve([
            {
                kota: 'bandung',
                temperatur: '26',
                kondisi: 'cerah berawan'
            }
        ]);
    }, 500)
});

// * menjalankan API satu-satu
// movies.then(function (response) {
//     console.log(response);
// });
// weather.then(function (response) {
//     console.log(response);
// });

// * menjalankan semua API langsung 
Promise.all([movies, weather])
    .then(function (response) {
        const [film, cuaca] = response;
        console.log(film[0]);
        console.log(cuaca[0]);
    })
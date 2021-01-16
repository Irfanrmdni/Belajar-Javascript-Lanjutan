

// contoh 01
/* let ditepati = false;

const janji = new Promise((resolve, reject) => {
    if (ditepati) {
        resolve('janji ditepati');
    } else {
        reject('janji tidak ditepati');
    }
});

// console.group(janji);

// menampilkan console.log nya didalam then dan catch
janji
    .then(Response => console.log('Ok! ' + Response))
    .catch(Response => console.log('NOT OK! ' + Response));

 */




// contoh 02 dengan membuat pending / menunggu proses dulu
/* let ditepati2 = false;

const janji2 = new Promise((resolve, reject) => {
    if (ditepati2) {
        setTimeout(() => {
            resolve('janji ditepati');
        }, 2000)
    } else {
        setTimeout(() => {
            reject('janji tidak ditepati');
        }, 2000)
    }
});

// supaya terlihat Asyncrhonous
console.log('mulai');

// menampilkan pending nya
// console.log(janji2.then(() => console.log(janji2)));

// langsung menampilkan / menjalankan janji2
janji2
    .finally(() => console.log('selesai menunggu!'))
    .then(Response => console.log('OK' + Response))
    .catch(Response => console.log('NOT OK' + Response));

console.log('selesai'); */



// contoh 03 - PromiseAll() untuk memanggil sekaligus ketika punya banyak data / API 

// DATA / API 1
const film = new Promise(resolve => {
    setTimeout(() => {
        resolve([{
            judul: 'toy story',
            sutradara: 'irpan',
            pemeran: 'galih,ujang'
        }]);
    }, 1000);
});

// DATA / API 2
const cuaca = new Promise(resolve => {
    setTimeout(() => {
        resolve([{
            wilayah: 'kota bandung',
            temp: 30,
            kondisi: 'cerah berawan'
        }]);
    }, 1000);
});

// memanggil sekaligus DATA / API
Promise.all([film, cuaca])
    // ini berisi array dan menampilkan sekaligus semua data / API
    // .then(Response => console.log(Response));

    // tetapi kalau mau dibuat secara terpisah maka kita gunakan spread untuk memecah array
    .then(Response => {
        const [film, cuaca] = Response;
        console.log(film);
        console.log(cuaca);
    });
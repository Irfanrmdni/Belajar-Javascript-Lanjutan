
// const coba = new Promise(resolve => {
//     setTimeout(() => {
//         resolve('selesai');
//     }, 2000);
// });

// coba.then(() => console.log(coba));

// function cobaPromise() {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve('Selesai');
//         }, 2000);
//     });
// }

// const coba = cobaPromise();
// coba.then(response => console.log(response));

// membuat Async (jadi Async ini memberitahu bahwa ada function yang Asynchronous)
// async function cobaAsync() {
//     const coba = await cobaPromise(); // lalu simpan await nya sebelum function Asynchronous
//     // jadi await ini tunggu dulu sampai promise nya resolve / selesai
//     console.log(coba);
// }

// cobaAsync();

// membuat dengan parameter resolve dan reject
// function cobaPromise2() {
//     return new Promise((resolve, reject) => {
//         const waktu = 2000;
//         if (waktu < 5000) {
//             setTimeout(() => {
//                 resolve('Selesai');
//             }, waktu);
//         } else {
//             reject('kelamaan');
//         }
//     });
// }

// const coba2 = cobaPromise2();
// coba2
//     .then(coba2 => console.log(coba2))
//     .catch(coba2 => console.log(coba2));

// const showProm = cobaProm();
// showProm
//     .then((Response) => console.log(Response))
//     .catch((Response) => console.log(Response))

// dengan menggunakan Async dan Await
// async function cobaAsync() {
//     try { // ini untuk yang resolve dan berhasil
//         const coba = await cobaPromise2();
//         console.log(coba);
//     } catch (error) { // ini untuk yang reject / tidak berhasil
//         console.log(error);
//     }
// }

// cobaAsync();

// function cobaProm() {
//     return new Promise((resolve, reject) => {
//         const waktu = 1000;
//         if (waktu < 4000) {
//             setTimeout(() => {
//                 resolve('Selesai pan');
//             }, waktu);
//         } else {
//             reject('Kelamaan pan');
//         }
//     });
// }

// async function cobaAsync() {
//     try {
//         const showPromise = await cobaProm();
//         console.log(showPromise);
//     } catch (error) {
//         console.log(error);
//     }
// }

// cobaAsync();

// =============================================================================================================================================

// ? async await

// * contoh 1
// const coba = new Promise(resolve => resolve('selesai'));
// console.log(coba);


// * contoh 2
// const coba = new Promise(resolve => {
//     setTimeout(() => {
//         resolve('selesai');
//     }, 2000);
// });
// console.log(coba);
// coba.then(() => console.log(coba));


// ? menerapkan promise ke async await
// function cobaPromise() {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve('selesai');
//         }, 2000);
//     });
// }

// * menampilkan hasil nya dengan cara then
// const coba = cobaPromise();
// coba.then((response) => console.log(response));

// cobaPromise()
//     .then((response) => console.log(response))


// * menampilkan hasil nya dengan function async await
// async function printPromise() {
//     const print = await cobaPromise();
//     console.log(print);
// }

// printPromise();



// ? contoh dengan menggunakan resolve dan reject
function cobaPromise() {
    return new Promise((resolve, reject) => {
        let waktu = parseInt(prompt('masukan waktu : '));
        if (waktu <= 5000) {
            setTimeout(() => {
                resolve('waktu anda cukup');
            }, waktu);
        } else {
            setTimeout(() => {
                reject('waktu anda kelamaan');
            }, waktu);
        }
    });
}

// * menjalankan dengan then
// const coba = cobaPromise();
// coba.then(() => console.log(coba))
//     .catch(() => console.log(coba));

// * menjalankan dengan function async dengan try dan catch
async function printPromise() {
    try {
        const print = await cobaPromise();
        console.log(print);
    }
    catch (error) {
        console.log(error);
    }
}

printPromise();
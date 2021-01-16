
// const coba = new Promise(resolve => {
//     setTimeout(() => {
//         resolve('selesai');
//     }, 2000);
// });

// coba.then(() => console.log(coba));

/* function cobaPromise() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('Selesai');
        }, 2000);
    });
} */

// const coba = cobaPromise();
// coba.then(response => console.log(response));

// membuat Async (jadi Async ini memberitahu bahwa ada function yang Asynchronous)
/* async function cobaAsync() {
    const coba = await cobaPromise(); // lalu simpan await nya sebelum function Asynchronous
    // jadi await ini tunggu dulu sampai promise nya resolve / selesai
    console.log(coba);
}

cobaAsync(); */


// membuat dengan parameter resolve dan reject
function cobaPromise2() {
    return new Promise((resolve, reject) => {
        const waktu = 5000;
        if (waktu < 5000) {
            setTimeout(() => {
                resolve('Selesai');
            }, waktu);
        } else {
            reject('kelamaan');
        }
    });
}

// const coba2 = cobaPromise2();

// coba2
//     .then(coba2 => console.log(coba2))
//     .catch(coba2 => console.log(coba2));

// dengan menggunakan Async dan Await
async function cobaAsync() {
    try { // ini untuk yang resolve dan berhasil
        const coba = await cobaPromise2();
        console.log(coba);
    } catch (error) { // ini untuk yang reject / tidak berhasil
        console.log(error);
    }
}

cobaAsync();

// ? contoh Synchronous 
console.log('Hello')
console.log('Javascript')
console.log('Coder')

/*
Output :
Hello!
Javascipt
Coder

Output dari kode diatas dijamin akan sesuai urutan, karena setiap perintah harus
menunggu perintah sebelumnya selesai. Proses seperti ini disebut ‘blocking’.
*/


// ? contoh Asynchronous
console.log('Hello');
setTimeout(() => { console.log('Javascript') }, 1000) // tunda selama 100 miliseconds
console.log('Coder');

/* ----------
Output :
Hello!
Coder
Javascipt

hasil eksekusi atau output tidak selalu berdasarkan urutan kode, tetapi berdasarkan waktu proses.
Eksekusi dengan asynchronous tidak akan membloking atau menunggu suatu
perintah sampai selesai. Daripada menunggu, asynchronous akan mengeksekusi perintah selanjutnya.

Pada baris ke 2 setTimeout digunakan untuk menunda eksekusi dalam satuan milisecond dalam hal ini untuk simulasi prosess async.
Perhatikan bahwa outputnya tidak berurutan sesuai input (kode). Karena cara kerja asynchronous adalah berdasarkan waktu proses.
Jika ada salah satu eksekusi membutuhkan proses yang agak lama, maka sembari menunggu prosess tersebut javascript mengeksekusi perintah selanjutnya.
------------*/
// SOAL : JavaScript: Empty an array keeping the original

// //Cara 1 menggunakan metode length yang diberi indeks 0 (ini cara dari website)
// // Declare and initialize an array
// let arr = [1, 3, 6, 3, 5];

// // Output the contents of the array before modification
// console.log(arr);

// // Set the length of the array to 0, effectively clearing its contents
// arr.length = 0;

// // Output the contents of the array after modification
// console.log(arr);

// // Cara 2 menggunakan metode splice
// let arr = [5, 9, 2, 8, 4];

// // Output array sebelum di beri metode splice
// console.log(arr);

// // menggunakan metode splice untuk menghapus semua element dimulai dari indeks 0
// arr.splice(0, arr.length);

// // Output array setelah diberi metode splice
// console.log(arr);

// // cara 3 menggunakan metode pop yang diberi indeks 0
// let arr = [5, 9, 2, 8, 4];

// // Output array sebelum di beri metode pop
// console.log(arr);

// // memberi metode pop dari elemen array terakhir sampai menjadi array kosong
// while (arr.length > 0 ) {
//     console.log(arr.pop());
// }

// // Output array setelah diberi metode pop
// console.log(arr);

// //cara 4 menggunakan metode from array kosong sehingga array yang baru ketika dipanggl kosong
// let arr = [5, 9, 8, 2, 4];

// // Output array sebelum di beri metode from
// console.log(arr);

// // memberi metode from dan didalam diberi array kosong agar output nya array kosong dan tidak menghapus array yang pertama
// arr = Array.from([]);

// // Output array setelah diberi metode from
// console.log(arr);

// // cara 5 menggunakan metode filter yang kondisinya false, sehingga array baru yang dipanggil berisi elemen kosong karena kondisinya selalu false
// let arr = [4, 2, 8, 9, 5];

// // Output array sebelum di beri metode filter
// console.log(arr);

// //  memberi metode filter yang kondisinya false sehingga outputnya array kosong  dan tidak menghapus array yang pertama
// arr = arr.filter(() => false);

// // Output array setelah diberi metode filter
// console.log(arr);

// //cara 6 menggunakan metode array yang kosong sehingga, setelah dimodifikasi array yag gdipanggil kosong
// let arr = [4, 2, 5, 8, 9];

// // Output array sebelum di beri metode
// console.log(arr);

// // memberikan variabel arr (array) yang merujuk ke array kosong ([])
// arr = [];

// // Output array setelah memberikan variabel arr (array) yang merujuk ke array kosong ([]). Dengan kata lain, kita membuat arr menunjuk ke array baru yang kosong.
// console.log(arr);

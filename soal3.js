function getAngkaTerbesarKedua(personName) {
  if (
    !Array.isArray(personName) ||
    // personName.length < 2 ||
    !personName.every((num) => typeof num === "number")
  ) {
    return "Invalid input";
  }

  const uniqueNumbers = Array.from(new Set(personName)); // Menghilangkan duplikat angka
  const sortedNumbers = uniqueNumbers.sort((a, b) => b - a); // Mengurutkan angka secara descending

  // if (sortedNumbers.length >= 2) {
  return sortedNumbers[1]; // Mengembalikan angka terbesar kedua
  // }
}

const dataAngka = [9, 4, 7, 7, 4, 3, 2, 2, 8];
console.log(getAngkaTerbesarKedua(dataAngka));
console.log(getAngkaTerbesarKedua (0)); // ini salah karena memanggil fungsi dengan parameter yang tidak sesuai, sehingga menampilkan invalid input
console.log(getAngkaTerbesarKedua(1)); // ini salah karena memnggil fungsi tanpa parameter, sehingga menampilkan invalid input

//cara kelompok 3 
// const getAngkaTerbesarKedua = (dataAngka) => { 
//   if (!Array.isArray(dataAngka)) { 
//     return "ini bukan array"; 
//   } else if (Array.isArray(dataAngka)) { 
//     if (dataAngka.length === 0) { 
//       return "array kosong"; 
//     } else if (dataAngka.length === 1) { 
//       return datanya cuma satu, nih angkanya ${dataAngka[0]}; 
//     } else { 
//       dataAngka.sort((a, b) => b - a); 
//       let a = 1; 
//       while (dataAngka[a - 1] === dataAngka[a]) { 
//         a++; 
//       } 
//       return dataAngka[a]; 
//     } 
//   } 
// }; 
 
// const dataAngka = [9, 9, 9, 7, 4, 3, 2, 2, 7]; 
// const dataAngka2 = []; 
 
// console.log(getAngkaTerbesarKedua(dataAngka)); 
// console.log(getAngkaTerbesarKedua({})); 
// console.log(getAngkaTerbesarKedua([1])); 
// console.log(getAngkaTerbesarKedua(2)); 
// console.log(getAngkaTerbesarKedua()); 
// console.log(getAngkaTerbesarKedua("2"));
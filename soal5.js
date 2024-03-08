const dataPenjualanNovel = [
  {
    idProduct: "BOOK002421",
    namaProduk: "Pulang - Pergi",
    penulis: "Tere Liye",
    hargaBeli: 60000,
    hargaJual: 86000,
    totalTerjual: 150,
    sisaStok: 17,
  },
  {
    idProduct: "BOOK002351",
    namaProduk: "Selamat Tinggal",
    penulis: "Tere Liye",
    hargaBeli: 75000,
    hargaJual: 103000,
    totalTerjual: 171,
    sisaStok: 20,
  },
  {
    idProduct: "BOOK002941",
    namaProduk: "Garis Waktu",
    penulis: "Fiersa Besari",
    hargaBeli: 67000,
    hargaJual: 99000,
    totalTerjual: 213,
    sisaStok: 5,
  },
  {
    idProduct: "BOOK002941",
    namaProduk: "Laskar Pelangi",
    penulis: "Andrea Hirata",
    hargaBeli: 55000,
    hargaJual: 68000,
    totalTerjual: 20,
    sisaStok: 56,
  },
];

function getInfoPenjualan(dataPenjualan) {
  // Validasi tipe data parameter
  if (
    !Array.isArray(dataPenjualan) ||
    !dataPenjualan.every(
      (item) =>
        typeof item === "object" &&
        "hargaBeli" in item &&
        "hargaJual" in item &&
        "totalTerjual" in item
    )
  ) {
  }

  // Inisialisasi variabel untuk menyimpan informasi
  let totalKeuntungan = 0;
  let totalModal = 0;
  let produkBukuTerlaris = "";
  let penulisTerlaris = "";
  let maksimalKeuntungan = 0;

  // Menghitung total keuntungan, total modal, dan mencari produk dan penulis terlaris
  dataPenjualan.forEach((item) => {
    const keuntungan = (item.hargaJual - item.hargaBeli) * item.totalTerjual;
    totalKeuntungan += keuntungan;
    totalModal += item.hargaBeli * item.totalTerjual;

    if (keuntungan > maksimalKeuntungan) {
      maksimalKeuntungan = keuntungan;
      produkBukuTerlaris = item.namaProduk;
      penulisTerlaris = item.penulis;
    }
  });

  // Menghitung persentase keuntungan
  const persentaseKeuntungan = ((totalKeuntungan / totalModal) * 100).toFixed(2);

  // Membuat objek hasil
  const hasil = {
    totalKeuntungan,
    totalModal,
    produkBukuTerlaris,
    penulisTerlaris,
    persentaseKeuntungan: `${persentaseKeuntungan}%`,
  };

  return hasil;
}

console.log(getInfoPenjualan(dataPenjualanNovel));

//cara Kelompok 5 

// function getInfoPenjualan (dataPenjualan) {
   
//   // === MODAL ===
//   // Ngitung Modal (Setiap buku) 
//   // Pakai method Map, tujuannya ngebuat new array juga dengan nilai-nilai modal dari semua buku 1:1
//                           // Gini ngitung manualnya == ((sisastok + totalterjual) * hargabeli) 
//                           // Kalau bingung ini dari mana dapatnya? Ini dari local data diatas, masing-masing ada propertinya
//   const totalModal = dataPenjualan
//       .map(a => ((a.sisaStok +  a.totalTerjual )* a.hargaBeli))
//   // Disini ada ".reduce" digunakan untuk ngejumlah/menjumlahkan hasil
//   // Cara kerjanya menjumlahkan value di dalam array 

//   // Jadi ACC ini nilai awalnya 0
//   // Nilai CURR yth nilai saati ini.
//       .reduce((acc, curr) => acc + curr); // ACC = Akumulator || CURR = Current
//       //semangat mba tantrik



//   // === KEUNTUNGAN ===
//   // Cara kerjanya sama dengan
//   // Ngitung Persentase Keuntungan
//   // Tetap sama menggunakan method map (penjelasan bisa sama seperti section modal diatas ^)
//                               // Gini ngitung manualnya == (hargajual - hargabeli)*totalterjual
//   const totalKeuntungan = dataPenjualan.map(a => ((a.hargaJual - a.hargaBeli)* a.totalTerjual))
//       .reduce((acc, curr) => acc + curr); // ACC = Akumulator || CURR = Current

//   // Menghitung Persentase Keuntungan
//   // Penggunaan tofixed(2) untuk membatasi jumlah desimal (cth= 3.1415 menjadi 3.14) <<
//   const persentaseKeuntungan = ((totalKeuntungan / totalModal) * 100)
//       .toFixed(2);



//   // === BUKU TERLARIS ===
//   // mencari Buku Terlaris

//   //Buat array yang berisi value total terjual dari setiap buku
//   const novel = dataPenjualan.map(a => a.totalTerjual);

//   //dengan Math.max pengambilan angka terbesars
//   //tujuannya untuk menemukan jumlah terjual tertinggi
//   const pengambilanTerbesar = Math.max(...novel); 

//   //disini dilakukan filtering buku yang memiliki jumlah terjual tertinggi
//   const novelTerlaris = dataPenjualan
//       .filter(a => a.totalTerjual == pengambilanTerbesar)
//       .map(a => a.namaProduct) //method mapping cara kerjanya sama dengan section MODAL dan Keuntungan
//       .toString(); //ngambil nama produk dari hasil filter dan diubah menjadi string
  


//   // === PENULIS TERLARIS ===

//   //buat array kosong / inisialisasi array kosong, digunakan untuk menyimpan properti {penulis, totalterjual}
//    const totalPenjualanPenulis = [];
//           //^^^ ARRAY TUJUAN

//   // disini menggunakan foreach untuk setiap buku di dataPenjualan (local data)
//    dataPenjualan.forEach(item => {
//        const {penulis , totalTerjual} = item;

//        //jika penulis ada di totalPenjualanPenulis, maka ditambahkan total terjualnya

//        const existingItem = totalPenjualanPenulis.find(a => a.penulis === penulis)
//        existingItem.totalTerjual += totalTerjual;
//          }else{
//                  //jika tidak, maka tambahkan penulis ke array degan total terjualnya
//              totalPenjualanPenulis.push({penulis, totalTerjual})
//      }
//      });

//      //disini menggunakan reduce untuk mendapatkan penulis dengan total terjual tertinggi
//         const penulisTerlaris = totalPenjualanPenulis
//             .reduce((acc,curr) => {
            
//                 return acc.totalTerjual > curr.totalTerjual ? acc : curr;
//     });

//     const stokterkecil = dataPenjualanNovel
//         .reduce ((minStok,book) => (book.sisaStok < minStok ? book.sisaStok:minStok), Infinity) 


//     //output Script
//     const hasil = {
//         totalKeuntungan : Rp.${totalKeuntungan},
//         totalModal : Rp.${totalModal},
//         persentaseKeuntungan: ${persentaseKeuntungan} %,
//         bukuTerlaris : novelTerlaris,
//         penulisTerlaris : penulisTerlaris.penulis,
//         stokterkecil:stokterkecil,
//     }
    
//     return hasil

// }

// console.log(getInfoPenjualan(dataPenjualanNovel))

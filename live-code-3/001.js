/**
Even Pairs Sum
--------------
Implementasikan function `evenPairsSum` yang akan menjumlahkan pasangan-pasangan angka genap yang
ada di dalam `str`.
Contoh
- input: '34102180'
  pasangan: 34, 10, 21, 80
  output: 124
  Karena ada pasangan genap (34, 10, 80) maka akan dijumlahkan
- input: '31913791'
  pasangan: 31, 91, 37, 91
  output: 0
  Karena tidak ada pasangan genap
- input: '2130113'
  pasangan: 21, 30, 11, 32
  output: 62

NOTE: Jika angka terakhir tidak memiliki pasangan, maka pasangkan dengan angka pertama seperti
      pada contoh terakhir

Aturan coding
-------------
- WAJIB MENYERTAKAN ALGORITMA/PSEUDOCODE

1. lakukan pemisahan angka-angka, dengan ketentuan 2 angka masing-masingnya.
  1a. jika angka terakhir tidak memiliki pasangan, maka pasangkan dengan angka pertama.
2. buatlah satu variable baru untuk menampung angka genap. nama variablenya adalah "hasilJumlah" dengan nilai 0
2. lakukan looping dengan inisialisasi variable i dengan nilai awal sama dengan 0, sampai akhir nilai.
  2a. jika pada masing2 nilai dua angka tersebut di MOD 2 sisanya sama dengan 0, maka masukkan angka tadi kedalam variable 'hasilJumlah' plus sama dengan angka dengan index ke i. jika tidak memenuhi, maka lanjut step 2b.
  2b. jika nilai di MOD 2 hasilnya tidak sama dengan nol, maka return 0

*/

function evenPairsSum (str) {
  // var hasilStr = []
  var hasilJumlah = 0
  
  for(var i = 0; i < str.length; i+=2){
    if(str[i+1] == undefined){
      //hasilStr.push(str[i] + str[0])
      (str[i] + str[0])
    } else {
      //hasilStr.push(str[i] + str[i+1])
      (str[i] + str[i+1])
    }
  }

  for(var j = 0; j < str.length; j++){
    if(str[j] % 2 === 0){
      hasilJumlah += Number(str[j])
    }
  }

  return str
}

// console.log(evenPairsSum('2044101211')); // 86
// console.log(evenPairsSum('33791363')); // 0
// console.log(evenPairsSum('23426766201')); // 140
console.log(evenPairsSum('2478201')); // 134

/*
20 44 10 12 11 = 86
*/

// 20 04 44 41 10 01 
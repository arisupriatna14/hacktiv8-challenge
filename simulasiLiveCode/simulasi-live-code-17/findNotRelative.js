/*

==================================
Array Mastery: Find Not Relative
==================================

Diberikan sebuah function findNotRelative yang menerima 2 parameter berupa array of number.
Output adalah array berupa kumpulan angka yang ada di array pertama tetapi tidak ada di array kedua.

Contoh 1:
input: [ 3, 6, 10, 12, 15 ] dan [ 1, 3, 5, 10, 16 ]
output: [ 6, 12, 15]

Contoh 2:
input: [ 10, 20, 36, 59 ] dan [ 5, 10, 15, 59 ]
output: [20, 36]

RULES:
 - WAJIB MENGGUNAKAN ALGORITMA/PSEUDOCODE
 - DILARANG MENGGUNAKAN .map, .filter atau .reduce!
*/
/*
Algoritma:
1. buat var hasilAkhir dengan nilai array kosong
2. lakukan nested looping dengan inisialisasi variable a dengan nilai awal 0 sampai akhir nilai. looping untuk membandingkan arr1 dengan arr2
  2a. buat var count dengan nilai 0
  2b. jika nilai pada arr1 tidak sama dengan arr2, maka count *= 1, jika tidak, maka count *= 0
3. jika count = 1, maka arr1 dipush ke var hasilAkhir
4. kembalikan nilai hasilAkhir


*/

function findNotRelative(arr1, arr2) {
  let hasilAkhir = []

  for(let a = 0; a < arr1.length; a++){
    var count = 1
    for(let b = 0; b < arr2.length; b++){
      if(arr1[a] !== arr2[b]){
        count *= 1
      } else {
        count *=0
      }
    }
    if(count === 1){
      hasilAkhir.push(arr1[a])
    }
  }
  return hasilAkhir
}

console.log(findNotRelative([ 3, 6, 10, 12, 15 ], [ 1, 3, 5, 10, 16 ])); // [ 6, 12, 15]
console.log(findNotRelative([ 10, 20, 36, 59 ], [ 5, 10, 15, 59 ])); //[20, 36]
console.log(findNotRelative([ 1, 2, 3], [2, 1, 3])); //[]

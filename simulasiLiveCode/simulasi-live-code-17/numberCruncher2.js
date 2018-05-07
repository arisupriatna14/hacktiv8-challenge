/*
-------------------
The Number Cruncher
-------------------
PROBLEM
========
Disediakan sebuah function numberCruncher yang bertugas untuk menerima sebuah parameter
berupa array of number, dan mengembalikan array baru yang merupakan hasil penambahan angka di
index array sebelumnya dengan dua angka yang berada di kiri dan kanannya. Apabila tidak ada
angka di kiri atau kanan, maka dianggap sebagai 0. Kemudian, dari setiap nilai di dalam array tersebut,
ambil yang nilainya ganjil, kemudian tambahkan semua nilai ganjil tersebut dan return nilai total ganjilnya.
Pola
----
input: [x, y, z, a, b]
proses: 
[
  (x + 0 + kanan dari x)
  (y + kiri dari y + kanan dari y)
  (z + kiri dari z + kanan dari z)
  (a + kiri dari a + kanan dari a)
  (b + kiri dari b + 0)
]
Contoh
-------
Input: [ 2 , 5 , 1 , 3 ]
Proses:
=> [ (2 + 0 + 5) , (5 + 2 + 1), (1 + 5 + 3), (3 + 1 + 0) ]
=> [ 7, 8, 9, 4 ]
=> nilai ganjil: 7 dan 9
=> 7 + 9
Output: 16
Input: [2, 3, 1, 4, 1, 5, 0, 3]
Proses:
=> [ 5, 6, 8, 6, 10, 6, 8, 3 ]
=> nilai ganjil: 5 dan 3
=> 5 + 3
Output: 8
Input: [3, 6, 8, 9, 1, 2, 3]
Proses:
=> [ 9, 17, 23, 18, 12, 6, 5 ]
=> nilai ganjil: 9, 17, 23, 5
=> 9 + 17 + 23 + 5
Output: 54
RULES
=====
- Wajib menggunakan pseudocode sebelum memulai kode
*/

function numberCruncher(numbers) {
    var hasil = 0
    var hasilAkhir = []

    for(var a = 0; a < numbers.length; a++){
        if(a === 0){
            hasil = numbers[a] + numbers[a+1]
        } else if(a === numbers.length-1){
            hasil = numbers[a-1] + numbers[a]
        } else {
            hasil = numbers[a-1] + numbers[a] + numbers[a+1]
        }
        hasilAkhir.push(hasil)
    }
   
    var result = 0
    for(var b = 0; b < hasilAkhir.length; b++){
        if(hasilAkhir[b] % 2 === 1){
            result += hasilAkhir[b]
        }
    }
    return result
    
}

console.log(numberCruncher([2, 3, 1, 4, 1, 5, 0, 3])); // 8
console.log(numberCruncher([0, 1, 0, 1, 0, 1, 0, 1, 0, 1])); // 6
console.log(numberCruncher([3, 6, 8, 9, 1, 2, 3])); // 54
console.log(numberCruncher([1, 0, 1, 1, 0, 1, 0, 1])); // 3
console.log(numberCruncher([])); // 0
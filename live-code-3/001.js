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

1. buat 2 buah variable baru, yang pertama dengan nama 'hasilStr' dengan nilai array kosong, yang kedua dengan nama 'hasilJumlah' dengan nilai 0.
2. lakukan perulangan, dimana var i sama dengan 0, kondisinya i kurang dari panjang "str" dan i selalu bertambah 2
  2a. jika str dengan index ke i+1 sama dengan undefined, maka 'str' dengan index ke i ditambah dengan "str" index ke 0 di push ke variable hasilStr. jika tidak memenuhi maka lanjut step 2b.
  2b. "str" index ke i + "str" index ke i+1, dipush ke variable "hasilStr"
3. lakukan perulangan, dimana variable j = 0, kondisi j kurang dari panjang "hasilStr", dan j selalu bertambah satu. Perulangan kali ini untuk mengecek, apakah nilai di variable "hasilStr" ada nilai yang genap atau tidak.
  3a. jika hasilStr di MOD 2 sama dengan 0, maka "hasilJumlah" ditambah "hasilJumlah" ditambah hasilStr index ke j, dimana variable hasiStr ini dibuat ke type data Number dlu. jadi begini Number(hasilStr[j]).
4. kembalikan nilai "hasilJumlah"
*/

function evenPairsSum(str) {
  var hasilStr = []
  var hasilJumlah = 0

  for (var i = 0; i < str.length; i += 2) {
    if (str[i + 1] == undefined) {
      hasilStr.push(str[i] + str[0])
      //(str[i] + str[0])
    } else {
      hasilStr.push(str[i] + str[i + 1])
      //(str[i] + str[i+1])
    }
  }

  //console.log(hasilStr)

  //var numHasilStr = Number(hasilStr)

  for (var j = 0; j < hasilStr.length; j++) {
    if (hasilStr[j] % 2 === 0) {
      hasilJumlah += Number(hasilStr[j])
    }
  }

 return hasilJumlah

}

console.log(evenPairsSum('2044101211')); // 86
console.log(evenPairsSum('33791363')); // 0
console.log(evenPairsSum('23426766201')); // 140
console.log(evenPairsSum('2478201')); // 134

/*
20 44 10 12 11 = 86
*/

// 20 04 44 41 10 01 

/*
 operator *, %, - dapat menjumlahkan angka tipe data string
 //console.log('4' * '2')
*/

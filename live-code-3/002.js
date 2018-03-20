/**
Array Injector
--------------
Implementasikan function `arrayInjector` menerima 3 parameter yaitu firstData, index dan secondData
dimana function ini meminta untuk menyisipkan `secondData` ke `firstData` berdasarkan paramter `index`
yang telah diberikan dan menempatkan `secondData` dimulai dari parameter `index` tersebut

Contoh:
  - input: [8, 'foobar', 'foobaz'], 1, ['bar', 'baz']
    output: [8, 'bar', 'baz', 'foobar', 'foobaz']

Aturan coding:
---------------
- WAJIB MENYERTAKAN ALGORITMA/PSEUDOCODE
- Dilarang menggunakan built-in function:
    - .splice()
    - spread operator(...)
*/

/*
Algoritma:
1. saya memiliki dua array dan satu index, dimana array tersebut akan saya lakukan looping dengan inisialisasi variable i dengan nilai awal sama dengan 0 dan sampai nilai akhir.
2. dimana array 'secondData' dimasukkan ke 'firstData' berdasarkan parameter `index`.
3. lalu array "firstData" di sort.




*/

function arrayInjector (firstData, index, secondData) {
  for(var i = 0; i < secondData.length; i++){
    firstData.push(secondData[i])
  }
  firstData.sort()
  return firstData
}

console.log(arrayInjector([1, 5, 6, 7], 1, [2, 3, 4]));
// [1, 2, 3, 4, 5, 6, 7]

console.log(arrayInjector([10, 20, 70], 2, [30, 40, 50, 60]));
// [10, 20, 30, 40, 50, 60, 70]

console.log(arrayInjector(['Dimitri', 'Alexei', 'Alexander', 'Alisa'], 3, ['Dragunov']));
// ['Dimitri', 'Alexei', 'Alexander', 'Dragunov', 'Alisa']
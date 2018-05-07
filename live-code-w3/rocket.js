// Competencies: Functions + Loopings
/*
==============
Three Cols Box
==============
Instruksi
=========
Buatlah sebuah function bernama drawSymbolicColsBox yang menjalankan proses dengan menggunakan looping
(boleh dengan while atau for) dan menerima satu parameter bernama height.
Buatlah sebuah pola pemunculan simbol @, $, dan * di log (dengan console.log()),
dimana @ mewakili kelipatan ganjil, $ kelipatan genap, dan * khusus baris ganjil kelipatan 3. berurut sebagai berikut:

contoh 1 (drawThreeColsBox(3)):
@ $ *
$ @ *
@ $ *

contoh 2 (drawThreeColsBox(5)):
@ $ * $ @
* @ $ * $
@ * @ $ *
$ @ * @ $
* $ @ * @

contoh 3 (drawThreeColsBox(1)):
@

Note: pola symbol harus dimulai dari 1, dan setiap symbol diberikan spasi.
tinggi kotak sesuai dengan nilai variable height!
*/

// SKELETON CODE (Code Sample)

function drawSymbolicColsBox(height) {
  var hasil = ''
  var num =  1
  for(var i=1; i<=height; i++){
    for(var j=1; j<=height; j++){
      
      if(num % 2 === 1 && num % 3 !== 0){
        hasil += '@' + ' '
      }
      if(num % 2 === 0 && num % 3 !== 0){
        hasil += num + ' '
      }
      if(num % 3 === 0){
        hasil += num + ' '
      }

      num++
      
      
    }
    hasil += '\n'
    //console.log(1 % 3)
    
  }
  return hasil
  
}

console.log(drawSymbolicColsBox(3));
console.log(drawSymbolicColsBox(5));
console.log(drawSymbolicColsBox(1));

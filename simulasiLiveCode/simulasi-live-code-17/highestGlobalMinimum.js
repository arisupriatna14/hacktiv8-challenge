/*
======================
Highest Global Minimum
======================
Name :_____________
[INSTRUCTIONS]
highestGlobalMinimum adalah sebuah function yang menerima dua parameter, dan keduanya merupakan array of number.
Function akan mendapatkan angka minimum dari masing-masing array yang diinput sebagai parameter, kemudian bandingkan kedua angka tersebut.
Function akan me-return salah satu dari angka minimum yang paling besar.
[RULE]
- Wajib menuliskan pseudocode. Tidak ada pseudocode / pseudocode tidak match dengan kode maka indikasi soal tidak diselesaikan secara pribadi dan tidak akan dinilai.
- Hanya boleh menggunakan sintaks for/while dan if-else untuk pemecahan masalah.
- Penggunaan sintaks Math.min, simbol ..., dan function .apply tidak diperbolehkan.
- Penggunaan sintaks .sort() array tidak diperbolehkan.
[]
[EXAMPLE]
highestGlobalMinimum([1, 1, 1] , [8, 15, 17, 9])
firstArr = [1, 1, 1]
secondArr = [8, 15, 17, 9]
nilai minimum dari firstArr = 1
nilai minimum dari secondArr = 8
karena 1 < 8, maka function highestGlobalMinimum akan me-return 8.
*/

function highestGlobalMinimum(firstArr, secondArr) {
  //mencari nilai terkecil pada firstArr
  for(var a = 0; a  < firstArr.length; a++){
    var target = firstArr[a]
    for(var b = a - 1; b >= 0 && (firstArr[b] > target); b--){
      firstArr[b+1] = firstArr[b]
    }
    firstArr[b+1] = target
  }

  //mencari nilai terkecil dari secondArr
  for(var a = 0; a  < secondArr.length; a++){
    var target = secondArr[a]
    for(var b = a - 1; b >= 0 && (secondArr[b] > target); b--){
      secondArr[b+1] = secondArr[b]
    }
    secondArr[b+1] = target
  }

  return secondArr
}

console.log(highestGlobalMinimum([1, 1, 1], [8, 15, 17, 9])); // 8
console.log(highestGlobalMinimum([4, 8, 9, 12], [33, 88, 99, 11])); // 11
console.log(highestGlobalMinimum([1, 2, 5, 2, 2], [67, 45, 55])); // 45
console.log(highestGlobalMinimum([7, 2, 4, 10, 8, 2], [6, 5, 13, 23])); // 5
console.log(highestGlobalMinimum([5, 11, 18, 6], [3, 1, 8, 13])); // 5





/*

//sort firstArr
  for (var i = 0; i < firstArr.length; i++) {
    var target = firstArr[i];
    for (var j = i - 1; j >= 0 && firstArr[j] > target; j--) {
      firstArr[j + 1] = firstArr[j];
    }
    firstArr[j + 1] = target;
  }

  //sort secondArr
  for (var x = 0; x < secondArr.length; x++) {
    var target = secondArr[x];
    for (var y = x - 1; y >= 0 && secondArr[y] > target; y--) {
      secondArr[y + 1] = secondArr[y];
    }
    secondArr[y + 1] = target;
  }

  var minFirst = 0;
  var minSecond = 0;
  //mencari nilai min pada firstArr
  for (var a = 0; a < firstArr.length; a++) {
    if (firstArr[a] <= firstArr[a + 1]) {
      minFirst = firstArr[0];
    }
  }

  //mencari nilai min pada secondArr
  for (var b = 0; b < secondArr.length; b++) {
    if (secondArr[b] <= secondArr[b + 1]) {
      minSecond = secondArr[0];
    }
  }

  //membandingkan minFirst dengan minSecond
  if (minFirst < minSecond) {
    return minSecond;
  } else {
    return minFirst;
  }*/
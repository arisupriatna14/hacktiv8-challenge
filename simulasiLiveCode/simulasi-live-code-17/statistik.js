/*
====================================
Number and Array Mastery: Statistics
====================================
Name Here : Ari Supriatna
[INSTRUKSI]
Tersedia 3 input:
1) kata (2 kemungkinan: 'min' atau 'max')
2) array berisi angka-angka positif
3) array berisi angka-angka positif
Output:
Jika kata adalah 'min', maka return hasil terkecil dari dua array yang ada
Jika kata adalah 'max', maka return hasil terbesar dari dua array yang ada
[CONTOH]
1) 'max', [6, 2, 4, 10, 8, 2] , [4, 7, 9, 19]  -->   10 , 19
2) 'min', [5, 11, 18, 6] , [3, 9, 10, 13]  -->    5 , 13
*/

function statistik(kata, arr1, arr2) {
  //sort arr1
  for(var a = 0; a < arr1.length; a++){
    var target = arr1[a]
    for(var b = a - 1; b >= 0 && (arr1[b] > target); b--){
        arr1[b+1] = arr1[b]
    }
    arr1[b+1] = target
  }

  //sort arr2
  for(var a = 0; a < arr2.length; a++){
    var target = arr2[a]
    for(var b = a - 1; b >= 0 && (arr2[b] > target); b--){
        arr2[b+1] = arr2[b]
    }
    arr2[b+1] = target
  }

  if(kata === 'max'){
    //maxArr1
    var maxArr1 = arr1[arr1.length-1]
    var maxArr2 = arr2[arr2.length-1]

    return maxArr1 + ' ' + maxArr2

  } else {
    var minArr1 = arr1[0]
    var minArr2 = arr2[0]

    return minArr1 + " " + minArr2
  }
}

console.log(statistik('min', [1, 1, 1] , [8, 15, 17, 9]));             // 1 8
console.log(statistik('max', [4, 8, 9, 12] , [33, 88, 99 ,11]));       // 12 99
console.log(statistik('min', [1, 2, 5, 2, 2] , [67, 45, 55]));         // 1 45
console.log(statistik('max', [6, 2, 4, 10, 8, 2] , [6, 5, 13, 23]));     // 10 23
console.log(statistik('min', [5, 11, 18, 6], [3, 1, 8, 13]));          // 5 1
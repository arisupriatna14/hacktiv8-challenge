/*
======================
Lowest Local Maximum
======================
Name :_____________
[INSTRUCTIONS]
lowestLocalMaximum adalah sebuah function yang menerima dua parameter, dan keduanya merupakan array of number.
Function akan mendapatkan angka maksimum dari masing-masing array yang diinput sebagai parameter, kemudian bandingkan kedua angka tersebut.
Function akan me-return salah satu dari angka maksimum yang paling kecil.
[RULE]
- Wajib menuliskan pseudocode. Tidak ada pseudocode / pseudocode tidak match dengan kode maka indikasi soal tidak diselesaikan secara pribadi dan tidak akan dinilai.
- Hanya boleh menggunakan sintaks for/while dan if-else untuk pemecahan masalah.
- Penggunaan sintaks Math.min, simbol ..., dan function .apply tidak diperbolehkan.
- Penggunaan sintaks .sort() array tidak diperbolehkan.
[]
[EXAMPLE]
lowestLocalMaximum([1, 1, 1] , [8, 15, 17, 9])
firstArr = [1, 1, 1]
secondArr = [8, 15, 17, 9]
nilai maksimum dari firstArr = 1
nilai maksimum dari secondArr = 17
karena 1 < 17, maka function lowestLocalMaximum akan me-return 1.
*/

/*
Algoritma:
1. saya punya dua buah paramater, dimana argument masing-masingnya adalah sebuah array satu dimensi. array tersebut akan saya looping
2. lakukan iterasi pada 'firstArr' untuk melakukan sorting nilai 
3. lakukan iterasi pada 'secondArr' untuk melakukan sorting nilai
4. buat variable baru dengan nama 'maxFirstArr' dengan nilai 'firstArr[panjang firstArr - 1]. variable ini untuk menampung nilai max dari array 'firstArr'
5. bua variable baru lagi dengan nama 'maxSecondArr' dengan nilai 'secondArr[panjang secondArr - 1]. variable ini untuk menampung nilai max dari array 'secondArr'
6. cek kondisi. 
    6a. jika maxFirstArr kurang dari "maxSecondArr", maka return "maxFirstArr". jika tidak masuk step 6b.
    6b. return "maxSecondArr"

*/

function lowestLocalMaximum(firstArr, secondArr) {
    //sorting firstArr
    for(var a = 0; a < firstArr.length; a++){
        var target = firstArr[a]
        for(var b = a - 1; b >= 0 && (firstArr[b] > target); b--){
            firstArr[b+1] = firstArr[b]
        }
        firstArr[b+1] = target
    }

    //sorting secondArr
    for(var a = 0; a < secondArr.length; a++){
        var target = secondArr[a]
        for(var b = a - 1; b >= 0 && (secondArr[b] > target); b--){
            secondArr[b+1] = secondArr[b]
        }
        secondArr[b+1] = target
    }
    
    //mencari nilai maksimum dari firstArr
    var maxFirstArr = firstArr[firstArr.length-1]

    //mencari nilai maksimum dari secondArr
    var maxSecondArr = secondArr[secondArr.length-1]
    
    if(maxFirstArr < maxSecondArr){
        return maxFirstArr
    } else {
        return maxSecondArr
    }
    
  }
  
  console.log(lowestLocalMaximum([1, 1, 1] , [8, 15, 17, 9])); // 1
  console.log(lowestLocalMaximum([4, 8, 9, 12] , [33, 88, 99 ,11])); // 12
  console.log(lowestLocalMaximum([1, 2, 5, 2, 2] , [67, 45, 55])); // 5
  console.log(lowestLocalMaximum([6, 2, 4, 10, 8, 2] , [6, 5, 13, 23])); // 10
  console.log(lowestLocalMaximum([5, 11, 18, 6], [3, 1, 8, 13])); // 13
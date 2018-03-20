function totalDigitRekursif(angka) {
  var strAngka = String(angka)
  var sliceAngka = strAngka.slice(1)
  //console.log(sliceAngka)
  if(strAngka.length === 0){
    return 0
  } else {
    return Number(strAngka[0]) + totalDigitRekursif(sliceAngka)
  }
}

// TEST CASES
console.log(totalDigitRekursif(512)); // 8
console.log(totalDigitRekursif(1542)); // 12
console.log(totalDigitRekursif(5)); // 5
console.log(totalDigitRekursif(21)); // 3
console.log(totalDigitRekursif(11111)); // 5
console.log(totalDigitRekursif(14081999))

/*
  
  Contoh:

512, berarti outputnya adalah 8, karena 5 + 1 + 2 = 8. 1542, berarti outputnya adalah 12, karena 1 + 5 + 4 + 2 = 12.
  
*/
function digitPerkalianMinimum(angka) {
  var arrAngka = []
  var arrAngkaSlice = []
  var hasilSplitAngka = ''
  for(var i = 0; i <= angka; i++){
    for(var j = 0; j <= angka; j++){

      var hasilKali = i * j

      if(hasilKali === angka){
        var faktorAngka = String(i) + String(j)
        arrAngka.push(faktorAngka)
        arrAngkaSlice = arrAngka.slice(Math.round(arrAngka.length/2-1), Math.round(arrAngka.length/2))
        hasilSplitAngka = arrAngkaSlice[0]
      }
    }
  }
  return hasilSplitAngka.length
}
  
  // TEST CASES
  console.log(digitPerkalianMinimum(24)); // 2
  console.log(digitPerkalianMinimum(90)); // 3
  console.log(digitPerkalianMinimum(20)); // 2
  console.log(digitPerkalianMinimum(179)); // 4
  console.log(digitPerkalianMinimum(1)); // 2
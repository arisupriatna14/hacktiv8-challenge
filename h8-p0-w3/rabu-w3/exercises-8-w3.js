function pasanganTerbesar(num) {
  var numString = String(num)
  var maxNum = 0
  var minNum = 0
  
  for(var i=0; i<numString.length; i++){
    minNum = numString[i] + numString[i + 1]
    if (minNum > maxNum){
      maxNum = minNum
    }
  }
  return Number(maxNum)
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99
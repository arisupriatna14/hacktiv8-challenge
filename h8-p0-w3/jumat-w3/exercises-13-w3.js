function targetTerdekat(arr) {
  // you can only write your code here!
  var iO = arr.indexOf('o')
  var iX = arr.indexOf('x')
  var jarakTerdekat = arr.length
  var hasil = 0

  if(iX === -1){
    return 0
  }

  for(var i=0; i<arr.length; i++){
    if(arr[i] === 'x'){
      hasil = Math.abs(i - iO)
      if(hasil < jarakTerdekat){
        jarakTerdekat = hasil
      }
    }
  }
  return jarakTerdekat
}

// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2
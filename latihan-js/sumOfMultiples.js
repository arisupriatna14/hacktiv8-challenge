function sumMul(n,m){
  var jumlah = 0
  if(n % 2 === 0){
    for(var a = 0; a < n; a++){
      for(var b = 0; b <= m; b++){
        jumlah += n //<= m
      }
    }
  }
  console.log(jumlah)
}
//console.log(sumMul(0, 0)) // Invalid
console.log(sumMul(2, 9)) // 20
console.log(sumMul(4, 123)) //1860
//console.log(sumMul(4, -7)) // Invalid

/*
sumMul(2, 9)   ==> 2 + 4 + 6 + 8 = 20
sumMul(3, 13)  ==> 3 + 6 + 9 + 12 = 30
sumMul(4, 123) ==> 4 + 8 + 12 + ... = 1860
sumMul(4, -7)  ==> "INVALID"
*/
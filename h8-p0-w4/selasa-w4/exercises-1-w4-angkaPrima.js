function angkaPrima(angka) {
  var counter = 0
  if(angka === 2){
    return true
  } else {
    for(var i = 2; i < angka; i++){
      if(angka % i === 0){
        return false
      }
    }
    return true
  }
}

// TEST CASES
console.log(angkaPrima(3)); // true
console.log(angkaPrima(7)); // true
console.log(angkaPrima(6)); // false
console.log(angkaPrima(23)); // true
console.log(angkaPrima(33)); // false
console.log(angkaPrima(29));
console.log(angkaPrima(31))
console.log(angkaPrima(4))
console.log(angkaPrima(10))
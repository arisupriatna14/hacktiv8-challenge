function urutkanAbjad(str) {
  var result = str.split('')
  
  for(var i = 0; i < result.length; i++){
    var target = result[i]
    for(var j = i - 1; j >= 0 && (result[j] > target); j--){
      result[j+1] = result[j]
    }
    result[j+1] = target
  }
  var hasil = result.join('')
  return hasil
}

// TEST CASES
console.log(urutkanAbjad('hello')); // 'ehllo'
console.log(urutkanAbjad('truncate')); // 'acenrttu'
console.log(urutkanAbjad('developer')); // 'deeeloprv'
console.log(urutkanAbjad('software')); // 'aeforstw'
console.log(urutkanAbjad('aegis')); // 'aegis'
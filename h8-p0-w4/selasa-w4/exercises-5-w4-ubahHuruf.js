function ubahHuruf(kata) {
  var abjad = 'abcdefghijklmnopqrstuvwxyz'
  var temp = ''
  
  for(var i = 0; i < kata.length; i++){
    for(var j = 0; j < abjad.length; j++){
      if(kata[i] === abjad[j]){
        temp += kata[i] = abjad[j+1]
      }
    }
  }
  return temp
}

// TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu

/*
algoritma

jika ketemu huruf a maka ganti jadi b
jika ketemu huruf b maka ganti jadi c
...
jika ketemu huruf z maka ganji jadi a

*/
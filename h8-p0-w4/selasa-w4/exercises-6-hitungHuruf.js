function hitungHuruf(kata) {
  var splitKata = kata.split(" ") //untuk memisahkan perkata
  // console.log(splitKata)
  var hasilAkhir = ''
  var target = 0
  
  
  for(var i = 0; i < splitKata.length; i++){
    hasilAkhir = splitKata[i]
    var counter = 0
    console.log(hasilAkhir)
    for(var j = 0; j < splitKata[i].length; j++){
      var tampungKata = hasilAkhir[j]
      //console.log(tampungKata)
      for(var k = 0; k < splitKata.length; k++){
        if(j !== k && (tampungKata === hasilAkhir[k])){
          counter++
        }
      }
    }
    if(counter > target){
      target = counter
      splitKata = hasilAkhir
    }
  }
  if(target > 0){
    return splitKata
  } else {
    return -1
  }
}


// TEST CASES
console.log(hitungHuruf('Today, is the greatest day ever')); // greatest
console.log(hitungHuruf('I am a passionate developer')); // passionate
console.log(hitungHuruf('aku adalah anak gembala')); // adalah
console.log(hitungHuruf('rajin pangkal kaya')); // pangkal
console.log(hitungHuruf('mengayuh perahu di danau')); // danau
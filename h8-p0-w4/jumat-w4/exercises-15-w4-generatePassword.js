function changeVocals (str) {
  
  var hurufVokal = 'aiueo'
  var ubahVokal = 'bjvfp'
  var hasil = ''
  
  for(var i = 0; i < str.length; i++){
    var tanda = false
    for(var j = 0; j < hurufVokal.length; j++){
      if(str[i] === hurufVokal[j]){
        hasil += ubahVokal[j]
        tanda = true
      }
    }
    if(tanda === false){
      hasil += str[i]
    }
  }
  return hasil
}

function reverseWord (str) {
  var hasil = ''
  
  for(var i = str.length-1; i >= 0; i--){
    hasil += str[i]
  }
  return hasil
}

function setLowerUpperCase (str) {
  var hasil = ''
  for(var i = 0; i < str.length; i++){
    if(str[i] === str[i].toLowerCase()){
      hasil += str[i].toUpperCase()
    } else {
      hasil += str[i].toLowerCase()
    }
  }
  return hasil
}

function removeSpaces (str) {
  var hasil = ''
  for(var i = 0; i < str.length; i++){
    if(str[i] === ' '){
      hasil += ''
    } else {
      hasil += str[i]
    }
  }
  
  return hasil
}

function passwordGenerator (name) {
  var ubahVokal = changeVocals(name)
  var reverseKata = reverseWord(ubahVokal)
  var ubahHurufBesar = setLowerUpperCase(reverseKata)
  var hapusSpasi = removeSpaces(ubahHurufBesar)
  
  if(name.length < 5){
    return 'Minimal karakter yang diinputkan adalah 5 karakter'
  }
  
  return hapusSpasi
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'
console.log(passwordGenerator('Ari Supriatna'))

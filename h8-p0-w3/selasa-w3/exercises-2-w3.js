//[Exercises 2] Tantangan Array 1 (Mengakses Nilai dalam Array)
function balikString(nama){
  var str = ''
  for(var i=nama.length-1; i>=0; i--){
    str += nama[i]
  }
  return str
}
console.log(balikString('hello world!'))
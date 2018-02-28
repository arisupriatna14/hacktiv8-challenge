//1. Tugas 1
function shoutOut() {
  return 'Halo Function'
}
console.log(shoutOut())


//2. Tugas 2
function calculateMultiply() {
  return num1 * num2
}
var num1 = 5
var num2 = 6

var hasilPerkalian = calculateMultiply(num1, num2)
console.log(hasilPerkalian)


//3. Tugas 3
function processSentence() {
  return 'Nama saya ' + name + ', umur saya ' + age + ' tahun, alamat saya di ' + address + ', dan saya punya hobby yaitu ' + hoby
}

var name = 'Agus'
var age = 30
var address = 'Jln. Malioboro, Yogjakarta'
var hoby = 'gaming'

var fullSentence = processSentence(name, age, address, hoby)
console.log(fullSentence)
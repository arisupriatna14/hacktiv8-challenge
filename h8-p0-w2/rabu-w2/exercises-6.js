//1. Melakukan Looping Menggunakan While

var i = 0;

console.log('LOOPING PERTAMA');

while(i < 20) {
  i += 2;
  console.log(i + '- I Love Coding');
}

console.log('LOOPING KEDUA');

while(i > 0){
  console.log(i + "- I will become fullstack developer");
  i -= 2;
}

//2. Melakukan Looping Menggunakan For
console.log('LOOPING PERTAMA');
for (var a=1; a <= 20; a++) {
  console.log(a + " - I Love coding");
}

console.log('LOOPING KEDUA');
for (var a=20; a >= 1; a--){
  console.log(a + ' - I will become fullstack developer');
}




//3. Angka GANJIL dan GENAP
var a;

//1. GANJIL GENAP
for (a=1; a<=100; a++) {
  if (a % 2 === 0){
    console.log(a + ' - GENAP')
  } else {
    console.log(a + ' - GANJIL')
  }
}

/////////////////////////////////////////
//2. KELIPATAN 3
for (a=1; a<=100; a+=2) {
  if (a % 3 === 0) {
    console.log(a + ' - KELIPATAN 3')
  } else {
    console.log(a + ' - ')
  }
}

////////////////////////////////////////
//3. KELIPATAN 6
for (a=1; a<=100; a+=5) {
  if (a % 6 === 0){
    console.log(a + ' - KELIPATAN 6')
  } else {
    console.log(a + ' - ')
  }
}

/////////////////////////////////////////
//4. KELIPATAN 10
for (a=1; a<=100; a+=9){
  if (a % 10 === 0) {
    console.log(a + ' - KELIPATAN 10')
  } else {
    console.log(a + ' - ')
  }
}	
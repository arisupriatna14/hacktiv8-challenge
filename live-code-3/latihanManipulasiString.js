function getDomainName(url){
  var hasilUrl = []
  var hasilAkhir = ''
  var urlSplit = url.split('.')
  //console.log(urlSplit)

  if(urlSplit[0] === 'www' && urlSplit[2] === 'com'){
    hasilAkhir = urlSplit[1]
  } else {
    hasilAkhir = urlSplit[0]
  }

  return hasilAkhir

}
console.log(getDomainName('www.google.com')); //google
console.log(getDomainName('facebook.com')); //facebook
console.log(getDomainName('twitter.com')); //twitter
console.log(getDomainName('www.hacktiv8.com')); //hacktiv8
console.log(getDomainName('wattpad.com'));

/*
Algoritma:
1. saya mempunyai satu string, dan akan saya looping, karena saya ingin mendapatkan domain namenya saja.
2. saya buat 2 variable baru, yang pertama variable 'hasilUrl' dengan nilai array kosong, yang kedua variable 'hasilAkhir' dengan nilai string kosong.
3. lakukan looping dengan inisialisasi dengan variable i dengan nilai awal sama dengan 0 sampai akhir nilai. 
    3a. jika nilai dengan index ke i tidak sama dengan string 'w' dan nilai dengan index ke i tidak sama dengan '.', maka url dengan index ke i di masukkan/dipush ke variable 'hasilAkhir'
4. lakukan looping lagi dengan inisialisasi variable j dengan nilai awal sama dengan 0 sampai panjangnya nilai dikurangi 3 
    4a. 'hasilAkhir' = 'hasilAkhir' + 'hasilUrl[j]'
5. kembalikan nilai "hasilAkhir"
*/

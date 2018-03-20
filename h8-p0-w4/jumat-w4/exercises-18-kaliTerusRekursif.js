function kaliTerusRekursif(angka) {
  var strAngka = String(angka)
  var target = strAngka[0]

  if(strAngka.length === 1){
    return strAngka
  } else {
    for(var i = 1; i < strAngka.length; i++){
        target *= strAngka[i]
    }
    return kaliTerusRekursif(target)
  }
}
  
  // TEST CASES
console.log(kaliTerusRekursif(66)); // 8
console.log(kaliTerusRekursif(3)); // 3
console.log(kaliTerusRekursif(24)); // 8
console.log(kaliTerusRekursif(654)); // 0
console.log(kaliTerusRekursif(1231)); // 6
console.log(kaliTerusRekursif(1481999))


/*

6 * 6 = 36
3 * 6 = 18
1 * 8 = 8

Notes:
untuk perkalian, jika number di ubah menjadi tipe data string, maka masih bisa dikalikan. tetapi jika penjumlahan, tipe data stringnya harus dirubah menjadi Number lagi.
*/
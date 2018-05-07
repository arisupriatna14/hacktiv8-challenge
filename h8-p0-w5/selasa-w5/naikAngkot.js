function naikAngkot(arrPenumpang) {
  rute = ['A', 'B', 'C', 'D', 'E', 'F'];
  rute.unshift('')
  console.log(rute)
  var hasilAkhir = []
  var hargaBayar = 0

  for(var a = 0; a < arrPenumpang.length; a++){
    var isiObj = {}
    
    isiObj.penumpang = arrPenumpang[a][0]
    isiObj.naikDari = arrPenumpang[a][1]
    isiObj.tujuan = arrPenumpang[a][2]
    
    var x = 0
    var y = 0
    for(var b = 0; b < rute.length; b++){
      if(arrPenumpang[a][1] == rute[b]){
        x = b
      }
      
      if (arrPenumpang[a][2] == rute[b]){
        y = b
      }
    }
  
    isiObj.bayar = Math.abs(y - x) * 2000

    hasilAkhir.push(isiObj)
  }
  return hasilAkhir
}
  
//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'C', 'A']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]
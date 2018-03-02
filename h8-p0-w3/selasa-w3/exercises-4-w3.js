//[Exercises 4] Tantangan Array 3 (Array Join, Split, Slice, Splice, Sort)


var input = ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"]  
//["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]  

input.splice(1, 2, "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung")
input.splice(4, 5,  "Pria", "SMA Internasional Metro")
console.log(input)

var bulan = ''
var bulan = input[3].split('/')
switch(bulan[1]){
  case '01': 
    bulan = 'Januari'
    break;
  case '02':
    bulan = 'Februari'
    break;
  case '03':
    bulan = 'Maret'
    break;
  case '04':
    bulan = 'April'
    break;
  case '05':
    bulan = 'Mei'
    break;
  case '06':
    bulan = 'Juni'
    break;
  case '07':
    bulan = 'Juli'
    break;
  case '08':
    bulan = 'Agustus'
    break;
  case '09':
    bulan = 'September'
    break;
  case '10':
    bulan = 'Oktober'
    break;
  case '11':
    bulan = 'November'
    break;
  case '12':
    bulan = 'Desember'
    break;
  default:
    bulan = 'Bulan tidak tersedia'
    break;
}
console.log(bulan)



//==================================
var a1 = [ '21', '05', '1989' ]

function sortDescending(a,b) {
  return b-a;
}
a1.sort(sortDescending);
console.log(a1);


//===================================
var formatTanggal = [ '21', '05', '1989' ]
console.log(formatTanggal.join('-'))



//===================================
console.log(input[1].slice(0, 15))

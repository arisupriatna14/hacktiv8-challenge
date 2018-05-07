// https://en.wikipedia.org/wiki/Zodiac#Table_of_dates

function zodiacSign (birthDate) {
    var tanggal = Number(birthDate[0] + birthDate[1])
    var bulan  = Number(birthDate[2] + birthDate[3])
    var Zodiac = ''

    if(tanggal >= 23 && tanggal <= 30 && bulan === 11 || tanggal <= 21 && bulan === 12){
        Zodiac = 'Sagitarius'
    } else if(tanggal >= 22 && tanggal <= 30 && bulan === 6 || tanggal <= 22 && bulan === 7){
        Zodiac = 'Cancer'
    } else if(tanggal >= 20 && tanggal <= 30 && bulan === 2 || tanggal <= 22 && bulan === 3){
        Zodiac = 'Pisces'
    } else if(tanggal >= 23 && tanggal <= 30 && bulan === 7 || tanggal <= 22 && bulan === 8){
        Zodiac = 'Leo'
    }
     
    return Zodiac
}
  
console.log(zodiacSign('2112')); // Sagittarius
console.log(zodiacSign('1408'))
console.log(zodiacSign('2906')); // Cancer
console.log(zodiacSign('0903')); // Pisces
console.log(zodiacSign('1907')); // Cancer

/*
sagitarius : 23 November – 21 December
cancer: 22 June – 22 July
pisces: 20 February - 20 March
leo: 23 July – 22 August
*/


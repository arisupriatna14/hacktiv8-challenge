// https://en.wikipedia.org/wiki/Zodiac#Table_of_dates

function zodiacSign (birthDate) {
    var tanggalBulan = []
    //var tanggal = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]
    for(var i = 0; i < birthDate.length; i+=2){
        tanggalBulan.push(birthDate[i] + birthDate[i+1])
    }

    // if(Number(tanggalBulan[0]) >= 23 && Number(tanggalBulan[1]) === 11 || Number(tanggalBulan[0]) <= 21 && Number(tanggalBulan[1]) === 12 ){
    //     console.log('sagittarius') 
    // } 

    
    
    
    
    
}
  
console.log(zodiacSign('2112')); // Sagittarius
console.log(zodiacSign('2906')); // Cancer
// console.log(zodiacSign('0903')); // Pisces
// console.log(zodiacSign('1906')); // Cancer

/*
23 November – 21 December

*/


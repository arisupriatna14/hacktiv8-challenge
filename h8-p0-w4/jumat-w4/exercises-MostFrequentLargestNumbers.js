function sorting(arrNumber) {
  for(let i = 0; i < arrNumber.length; i++){
    var target = arrNumber[i]
    for(var j = i - 1; j >= 0 && (arrNumber[j] < target); j--){
        arrNumber[j+1] = arrNumber[j]
    }
    arrNumber[j+1] = target
  }
  return arrNumber
}
  
function getTotal(arrNumber) {
  var counter = 0
  for(let i = 0; i < arrNumber.length; i++){
    if(arrNumber[0] === arrNumber[i]){
      counter++
    }
  }

  if(arrNumber.length === 0){
    return ''
  } else {
    return 'angka paling besar adalah ' + arrNumber[0] + ' dan jumlah kemunculan sebanyak ' + counter + ' kali'
  }
}

function mostFrequentLargestNumbers(arrNumber) {
  var listSort = sorting(arrNumber);
  var countHighest = getTotal(listSort);
  return countHighest;
}

console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
//'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'

console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
//'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'

console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
//'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'

console.log(mostFrequentLargestNumbers([]));
//''
function checkAB(num) {
    var numSplit = num.split('')
    var numArr = []
    
    for(var i = 0; i < numSplit.length; i++){
      if(numSplit[i] !== ' '){
        numArr.push(numSplit[i])
      }
    }
    
    for(var j = 0; j < numArr.length; j++){
      if(numArr[j] === 'a'){
        for(var k = j; k <= 6; k++){
          if(numArr[k] === 'b'){
            return true
          }
        }
      }
    }
    return false
    
  }
  
  // TEST CASES
  console.log(checkAB('lane borrowed')); // true
  console.log(checkAB('i am sick')); // false
  console.log(checkAB('you are boring')); // true
  console.log(checkAB('barbarian')); // true
  console.log(checkAB('bacon and meat')); // false
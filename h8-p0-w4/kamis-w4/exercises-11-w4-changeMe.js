function changeMe(arr) {
  var arrObj = {}
  // console.log(arr.length) // 2
  
  for(var i = 0; i < arr.length-1; i++){
    for(var j = 0; j < arr.length-1; j++){
      (j+1) + '. Christ Evans:'
      arrObj.firstName = arr[i][j]
      arrObj.lastName = arr[i][j+1]
      arrObj.gender = arr[i][j+2]
      arrObj.age = arr[i][j+3]
    }
  }
  
  /*for(var k = 0; k < arr.length; k++){
    for(var l = 0; l < arr.length-1; l++){
      (j+1) + '. Christ Evans:'
      arrObj.firstName = arr[k][l]
      arrObj.lastName = arr[k][l+1]
      arrObj.gender = arr[k][l+2]
      arrObj.age = arr[k][l+3]
    }
  }*/
  
  return arrObj
}

// TEST CASES
changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); // 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 36 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
//changeMe([]); // ""
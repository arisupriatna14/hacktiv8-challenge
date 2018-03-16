function changeMe(arr) {
  var resultObj = {}
    for(var j = 0; j < arr.length; j++){
      var arrObj = {}
      arrObj.firstName = arr[j][0]
      arrObj.lastName = arr[j][1]
      arrObj.gender = arr[j][2];
      if(arr[j][3] === undefined){
        arrObj.age = 'Invalid Birth Year'
      } else {
        arrObj.age = 2018 - arr[j][3];
      }
      console.log(arrObj)
    }
    
    if(arr.length === 0){
      console.log('""')
    }
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
changeMe([]); // ""
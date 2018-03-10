// function arrMultiDimensi(arr){
//   var arrResult = []
//   var arrPart = []
//   count = 0

//   for(var i=0; i<arr.length; i++){
//     if(count < 3){
//       arrPart.push(arr[i])
//       count = count + 1
//     } else {
//       arrResult.push(arrPart)
//       arrPart = []
//       count = []
//       arrPart.push(arr[i])
//       count++
//     }
//   }
//   arrResult.push(arrPart)
//   return arrResult
// }
// console.log(arrMultiDimensi([1,2,3,4,5,6,7]))




function groupAnimals(animals) {
  // you can only write your code here!
  var sortAnimal = animals.sort()
  var animalResult = [] //untuk wadah utama
  var animalPart = []
  
  for(var i=0; i<animals.length; i++){
    animalPart.push(animals[i])
    if(i !== animals.length-1){
      if(animals[i][0] !== animals[i+1][0]){
        animalResult.push(animalPart)
        animalPart = []
      } 
    } else {
      animalResult.push(animalPart)
      animalPart = []
    }
      
  } 
  //animalResult.push(animalPart)
  return animalResult

}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'kerbau', 'zebra']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda'], ['unta'] ]
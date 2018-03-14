function cariMedian(arr) {
  var ganjilGenap = arr.length % 2
  var result
  var resultMedian
  
  
  if(ganjilGenap === 0){
    
    result = arr.length / 2
    resultMedian = (arr[result] + arr[result-1]) / 2
    
  } else if(ganjilGenap === 1){
    
    result = Math.floor((arr.length / 2))
    resultMedian = arr[result]
    
  }
  
  return resultMedian
}


// TEST CASES
console.log(cariMedian([1, 2, 3, 4, 5])); // 3
console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
console.log(cariMedian([3, 4, 7, 6, 10])); // 7
console.log(cariMedian([1, 3, 3])); // 3
console.log(cariMedian([7, 7, 8, 8])); // 7.5

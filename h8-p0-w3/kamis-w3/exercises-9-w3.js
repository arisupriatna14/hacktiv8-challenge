function cariMean(arr){
  var hasilBagi = ''
  var hasil = 0
  var lenMean = arr.length
  for(var i=0; i<=lenMean-1; i++){
    hasil += arr[i]
    hasilBagi = Math.round(hasil / lenMean)
  }
  return hasilBagi
}
console.log(cariMean([1, 2, 3, 4, 5]))
console.log(cariMean([3, 5, 7, 5, 3]))
console.log(cariMean([6, 5, 4, 7, 3]))
console.log(cariMean([1, 3, 3]))
console.log(cariMean([7, 7, 7, 7, 7]))
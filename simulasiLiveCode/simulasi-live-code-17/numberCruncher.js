// Array 1 Competency Test

function numberCruncher(numberArr) {
    var hasil = 0
    var result = []
    
    for(var a = 0; a < numberArr.length; a++){
        if (a === 0) {
            hasil = numberArr[a] + numberArr[a+1];
        } else if (a === numberArr.length - 1) {
            hasil = numberArr[a-1] + numberArr[a];
        } else {
            hasil =  numberArr[a-1] + numberArr[a] + numberArr[a+1];
        }
        result.push(hasil)
    }
    return result
}

console.log(numberCruncher([7, 1, 0, 4])); // [ 8, 8, 5, 4 ]
console.log(numberCruncher([2, 3, 1, 4, 1, 5, 0, 3])); // [ 5, 6, 8, 6, 10, 6, 8, 3 ]
console.log(numberCruncher([1, 3, 2, 5, 6, 0])); // [ 4, 6, 10, 13, 11, 6 ]
console.log(numberCruncher([0, 1, 0, 1, 0, 1, 0, 1, 0, 1])); // [ 1, 1, 2, 1, 2, 1, 2, 1, 2, 1 ]
console.log(numberCruncher([3, 6, 8, 9, 1, 2, 3])); // [ 9, 17, 23, 18, 12, 6, 5 ]
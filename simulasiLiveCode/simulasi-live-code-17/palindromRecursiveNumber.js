function palindromeRecursive(num){
    num++
    if(num < 10){
        return num
    }

    var strNum = String(num)
    var balikNum = ''
    for(var i = strNum.length-1; i >= 0; i--){
        balikNum += strNum[i]
    }
    
    if(strNum === balikNum){
        return strNum
    } else {
        return palindromeRecursive(strNum)
    }
    // console.log(strNum + ' ' + balikNum)  
    // console.log(strNum) 
}
console.log(palindromeRecursive(8)); // 9
console.log(palindromeRecursive(10)); // 11
console.log(palindromeRecursive(117)); // 121
console.log(palindromeRecursive(175)); // 181
console.log(palindromeRecursive(1000)); // 1001
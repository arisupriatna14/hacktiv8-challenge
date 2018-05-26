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
    console.log(strNum + ' ' + balikNum)
    if(strNum === balikNum){
        return strNum
    } else {
        return palindromeRecursive(strNum)
    }
      
    // console.log(strNum) 
}
console.log(palindromeRecursive(8)); // 9
console.log(palindromeRecursive(10)); // 11
console.log(palindromeRecursive(117)); // 121
console.log(palindromeRecursive(175)); // 181
console.log(palindromeRecursive(1000)); // 1001

/*
=== PSEUDOCODE ===
PALINDROM RECURSIVE

STORE `num` with value 0 (number)

`num` = `num` ADD By 1

IF `num` < 10 THEN
    DISPLAY `num`
ENDIF

STORE `strNum` with value STRING OF `num`
STORE `balikNum` with value '' (string kosong)
STORE `a` with value 0 (number)

WHILE `a` = LENGTH OF  `strNum` - 1
    `balikNum` = `balikNum` + `strNum[a]`
    `a` = `a` - 1
ENDWHILE

IF `strNum` = `balikNum` THEN
    DISPLAY `strNum`
ELSE 
    DISPLAY `palindromRecursive(strNum)`
ENDIF

*/
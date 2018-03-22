function hapusSimbol(str) {
    var str = str.match(/\w/gi)
    var temp = ''
    
    for(var a = 0; a < str.length; a++){
        temp += str[a]
    }

    return temp
}

// TEST CASES
console.log(hapusSimbol('test%$4aa')); // test4aa
console.log(hapusSimbol('devel0p3r s3j@@ati')); // devel0p3rs3jati
console.log(hapusSimbol('ma@#k!an~')); // makan
console.log(hapusSimbol('coding')); // coding
console.log(hapusSimbol('1+3-5*2=100')); // 1352100
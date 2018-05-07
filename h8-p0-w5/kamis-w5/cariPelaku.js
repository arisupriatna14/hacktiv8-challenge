function cariPelaku(str) {
    var str =  str.match(/abc+/g)
    var totalPelaku = 0

    // for(var a = 0; a < str.length; a++){
    //     totalPelaku++
    // }
    return str.length
}

// TEST CASES
console.log(cariPelaku('mabcvabc')); // 2
console.log(cariPelaku('abcdabdc')); // 1
console.log(cariPelaku('bcabcac')); // 1
console.log(cariPelaku('abcabcabc')); // 3
console.log(cariPelaku('babcbacabc')); // 2
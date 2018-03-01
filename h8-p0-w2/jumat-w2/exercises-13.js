function xo(str) {
  var iO = 0
  var iX = 0
  for (var i=0; i<=str.length; i++) {
    if (str[i] === 'x') {
      iX ++
    } else if (str[i] === 'o') {
      iO ++
    }
  }
  
  if (iX === iO) {
    return true
  } else {
    return false
  }
}

// TEST CASES
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true
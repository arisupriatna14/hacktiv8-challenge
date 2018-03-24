function meleeRangedGrouping (str) {
  let result = []
  let ranged = []
  let melee = []
  let strSplit = str.split(',')

  if(str.length === 0){
    return result
  }
  
  for(var a = 0; a < strSplit.length; a++){
    for(var b = 0; b < strSplit[a].length; b++){
      if(strSplit[a][b] === '-' && strSplit[a][b+1] === 'R'){
        ranged.push(strSplit[a].slice(0, b))
      } else if(strSplit[a][b] === '-' && strSplit[a][b+1] === 'M'){
        melee.push(strSplit[a].slice(0, b))
      }
    }
  }
  result.push(ranged, melee)
  return result
 
  
  //let hasilSplit = hasil.split('-')
  
}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []
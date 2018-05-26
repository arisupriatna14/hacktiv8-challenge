/*
    ===========================
    Initial Grouping Descending
    ==========================
    [INSTRUCTION]
    Disediakan sebuah function initialGroupingDescending yang bertugas untuk menerima sebuah parameter
    berupa array satu dimensi berisikan nama-nama. Function initialGroupingDescending akan
    mengelompokkan nama-nama tersebut berdasarkan huruf depannya dan huruf depan harus terurut dari paling besar/descending dan dipisahkan ke dalam
    array dua dimensi.
    [EXAMPLE]
    Input: ['Budi', 'Badu', 'Joni', 'Jono']
    Output: 
    [
        [ 'J', 'Joni', 'Jono' ],
        [ 'B', 'Budi', 'Badu' ]
    ]
    Kamu tidak perlu peduli dengan urutan alphabet nama siapa yang keluar terlebih dahulu!
    RULES:
    - Dilarang menggunakan sintaks Set atau Regex
    - Dilarang menggunakan built in function sort 
*/

function initialGroupingDescending(studentsArr) {
  //sort studentsArr 
  for(var a = 0; a < studentsArr.length; a++){
    var target = studentsArr[a]
    for(var b = a - 1; b >= 0 && (studentsArr[b] < target); b--){
      studentsArr[b+1] = studentsArr[b]
    }
    studentsArr[b+1] = target
  }

  //mencari huruf depan
  var hurufDepanNama = []
  for(var a = 0; a < studentsArr.length; a++){
    var count = 1
    for(var b = 0; b < hurufDepanNama.length; b++){
      if(studentsArr[a][0] !== hurufDepanNama[b][0]){
        count *= 1
      } else {
        count *= 0
      }
    }
    if(count === 1){
      hurufDepanNama.push([studentsArr[a][0]])
    }
  }

  var output = []
  for(var a = 0; a < hurufDepanNama.length; a++){
    for(var b = 0; b < studentsArr.length; b++){
      if(hurufDepanNama[a][0] === studentsArr[b][0]){

      }
    }
  }


  
}

console.log(initialGroupingDescending(["Budi", "Badu", "Joni", "Jono"]));
/*
[
    [ 'J', 'Joni', 'Jono' ],
    [ 'B', 'Budi', 'Badu' ]
]
*/

console.log(
  initialGroupingDescending(["Mickey", "Yusuf", "Donald", "Ali", "Gong"])
);
/*
[
    [ 'Y', 'Yusuf' ],
    [ 'M', 'Mickey' ],
    [ 'G', 'Gong' ],
    [ 'D', 'Donald' ],
    [ 'A', 'Ali' ]
]
*/

console.log(
  initialGroupingDescending(["Rock", "Stone", "Brick", "Rocker", "Sticker"])
);
/*
[
    [ 'S', 'Stone', 'Sticker' ],
    [ 'R', 'Rock', 'Rocker' ],
    [ 'B', 'Brick' ]
]
*/

/*
var result = [];
  var arr2 = [];

  //sort descending studentArr
  for (var a = 0; a < studentsArr.length; a++) {
    var target = studentsArr[a];
    for (var b = a - 1; b >= 0 && studentsArr[b] < target; b--) {
      studentsArr[b + 1] = studentsArr[b];
    }
    studentsArr[b + 1] = target;
  }

  var hurufDepanNama = [];
  //hurufDepanNama.push([studentsArr[0][0]]);

  for (var i = 0; i < studentsArr.length; i++) {
    var count = 1;
    for (var j = 0; j < hurufDepanNama.length; j++) {
      if (studentsArr[i][0] !== hurufDepanNama[j][0]) {
        count *= 1;
      } else {
        count *= 0;
      }
    }
    if (count === 1) {
      hurufDepanNama.push([studentsArr[i][0]]);
    }
  }

  //cek nama sesuai hurudDepanNama
  for (var x = 0; x < hurufDepanNama.length; x++) {
    for (var y = 0; y < studentsArr.length; y++) {
      if (hurufDepanNama[x][0] === studentsArr[y][0]) {
        hurufDepanNama[x].push(studentsArr[y]);
      }
    }
  }
  return hurufDepanNama;
*/
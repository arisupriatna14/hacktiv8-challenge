// 1.  Menyusun Barisan Bintang
var rows1;

for (rows1 = 1; rows1 <= 5; rows1++) {
  console.log('*');
}


//2. Menyusun Barisan Bintang Dengan Nested Looping
var rows2;

for (rows2 = 1; rows2 <= 5; rows2++) {
  console.log('*****'); 
    for (rows2 = 1; rows2 <= 4; rows2++) {
      console.log('*****');
        for (rows2 = 1; rows2 <= 3; rows2++) {
          console.log('*****');
            for (rows2 = 1; rows2 <= 2; rows2++) {
              console.log('*****');
                for (rows2 = 1; rows2 <= 1; rows2++) {
                  console.log ('*****');
                }
            }
        }
    }
}

//cara kedua :

var str = '';
for (var a=1; a<=5; a++) {
  for (var b=1; b<=5; b++) {
    str += '*';
  }
  str += '\n';
}
console.log(str)





//3. Menyusun Barisan Tangga Bintang Dengan Nested Looping
var rows3;
for (rows3 = 1; rows3 <= 5; rows3++) {
  console.log('*');
    for (rows3 = 1; rows3 <= 4; rows3++) {
      console.log('**');
        for (rows3 = 1; rows3 <= 3; rows3++) {
          console.log('***');
            for (rows3 = 1; rows3 <= 2; rows3++) {
              console.log('****');
                for (rows3 = 1; rows3 <=1; rows3++) {
                  console.log('*****')
                }
            }
        }
    }
}

//cara kedua :
var str = '';
for (var a=1; a<=5; a++) {
  for (var b=1; b<=a; b++) {
    str += '*';
  }
  str += '\n';
}
console.log(str)


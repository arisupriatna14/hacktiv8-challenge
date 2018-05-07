/**
Above Average Students
----------------------
Implementasikan function aboveAverageStudents untuk mendapatkan list murid yang nilainya di atas
rata-rata. Rumus untuk mencari rata-rata: ( Hasil pertambahan semua nilai / Jumlah murid )
Contoh:
- input: [
    { name: 'Foobar', score: 75 },
    { name: 'Foobaz', score: 60 },
    { name: 'Foo', score: 75 }
  ]
- output: [
    { name: 'Foobar', score: 75 },
    { name: 'Foo', score: 75 }
  ]

Aturan coding:
---------------
Dilarang menggunakan built-in function:
- .map()
- .filter()
- .reduce()

*/

function aboveAverageStudents (students) {
  var jumlahNilai = 0
  var jumlahMurid = ''
  var hasil = []
  
  
  for(var i = 0; i < students.length; i++){
    jumlahNilai += students[i].score
    //jumlahMurid = students[i].name.length
  }
  // console.log('Jumlah murid ' + jumlahMurid)
  // console.log('Jumlah nilai: ' + jumlahNilai)
  // console.log('jumlah siswa: ' + students.length)
  
  var rataNilai = Math.floor(jumlahNilai / students.length)
  //console.log('RAta nilai : ' + rataNilai)
  
  for(var j = 0; j < students.length; j++){
    if(students[j].score >= rataNilai){
      hasil.push(students[j])
    }
  }
  
  return hasil
  
}

console.log(aboveAverageStudents([
  { name: 'Dimitri', score: 90 },
  { name: 'Sergei', score: 70 },
  { name: 'Alisa', score: 50 },
  { name: 'Viktor', score: 65 },
  { name: 'Vladimir', score: 40 },
  { name: 'Alexei', score: 70 }
]));
// [ { name: 'Dimitri', score: 90 },
//   { name: 'Sergei', score: 70 },
//   { name: 'Viktor', score: 65 },
//   { name: 'Alexei', score: 70 } ]

console.log(aboveAverageStudents([
  { name: 'Foo', score: 100 },
  { name: 'Bar', score: 100 },
  { name: 'Baz', score: 90 }
]));
// [ { name: 'Foo', score: 100 }, { name: 'Bar', score: 100 } ]

console.log(aboveAverageStudents([]));
// [ ]

function changeMe(arr) {
    for(let i = 0; i < arr.length; i++){
        var hasilObj = {}
        hasilObj.firstName = arr[i][0]
        hasilObj.lastName  = arr[i][1]
        hasilObj.gender = arr[i][2]
        if(arr[i][3] === undefined){
            hasilObj.age = 'Invalid Birth Year'
        } else {
            hasilObj.age = 2018 - arr[i][3]
        }
        console.log(hasilObj)
    }
  }
  
  // TEST CASES
  changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); // 1. Christ Evans:
  // { firstName: 'Christ',
  //   lastName: 'Evans',
  //   gender: 'Male',
  //   age: 36 }
  // 2. Robert Downey:
  // { firstName: 'Robert',
  //   lastName: 'Downey',
  //   gender: 'Male',
  //   age: 'Invalid Birth Year' }
  changeMe([]); // ""

  
/* 
Algoritma:
  1. saya punya array multidimensi, dimana array tersebut akan dilooping dan akan dijadikan object.
  2. sekarang lakukan looping, dengan inisialisasi variable i dengan nilai awal 0, sampai akhir nilai.
  3. buat satu variable baru untuk menampung hasil dengan variable "hasilObj" dengan nilai object kosong. 
  4. sekarang kita ingin nilai array tersebut masuk kedalam variable object kosong yang telah kita buat diatas.
    4a. tulis variable object lalu tulis keyname .firstName  dengan value arr index ke i dan index ke 0
    4b. tulis variable object lalu tulis keyname .lastName dengan value arr index ke i dan index ke 1
    4c. tulis variable object lalu tulis keyname .gender dengan value arr index ke i dan index ke 2
        4c.1. jika arr dengan index ke j dan index ke 3 sama dengan undifined, maka tulis variable object dengan keyname .age dengan value 'invalid birth year' . jika arr dengan index ke j dan index ke 3 sama dengan ada isinya, maka masuk step 4d.3.
        4c.2. tulis variable object dengan keyname .age dengan value tahun sekarang dikurangi dengan arr index ke j dan index ke 3

*/
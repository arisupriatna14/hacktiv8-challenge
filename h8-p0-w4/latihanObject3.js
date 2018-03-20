function shoppingTime(memberId, money) {
    let hasilObj = {}
    let barang = [
        ['sepatu stacattu', 1500000],
        ['baju zoro', 500000],
        ['baju H&N', 250000],
        ['sweater uniklooh', 175000],
        ['casing handphone', 50000]
    ]

    if(memberId === undefined && money === undefined){
        return 'Mohon maaf, toko X hanya berlaku untuk member saja'
    }

    if(memberId === ''){
        return 'Mohon maaf, toko X hanya berlaku untuk member saja'
    } else {
        hasilObj.memberId = memberId
    }

    if(money < 50000){
        return 'Mohon maaf, uang tidak cukup.'
    } else {
        hasilObj.money = money
    }

    var hargaBarang = 0
    hasilObj.listPurchased = []
    
    for(let i = 0; i < barang.length; i++){
        if(money > barang[i][1]){
            hasilObj.listPurchased.push(barang[i][0]) 
            hargaBarang += barang[i][1]
        } 
        hasilObj.changeMoney = money - hargaBarang
    }
    return hasilObj
  }
  
  // TEST CASES
  console.log(shoppingTime('1820RzKrnWn08', 2475000));
    //{ memberId: '1820RzKrnWn08',
    // money: 2475000,
    // listPurchased:
    //  [ 'Sepatu Stacattu',
    //    'Baju Zoro',
    //    'Baju H&N',
    //    'Sweater Uniklooh',
    //    'Casing Handphone' ],
    // changeMoney: 0 }
  console.log(shoppingTime('82Ku8Ma742', 170000));
  //{ memberId: '82Ku8Ma742',
  // money: 170000,
  // listPurchased:
  //  [ 'Casing Handphone' ],
  // changeMoney: 120000 }
  console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
  console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
  console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja

  /*
  Algoritma :
  1. saya mempunya 2 buah argumen, dimana akan dijadikan sebuah object.
  2. buatlah satu variable baru dengan nama 'hasilObj' dengan nilai object kosong. variable ini untuk menampung object baru.
  3. jika 'memberId' = undifined dan 'money' = undifined, maka tampilkan 'Mohon maaf, toko X hanya berlaku untuk member saja'
  4. jika 'memberId' sama dengan undifined, maka tampilkan 'Mohon maaf, toko X hanya berlaku untuk member saja', jika tidak maka tampilkan hasilObj dengan keyname .memberId
  5. jika 'money' kurang dari sama 50000, maka tampilkan 'Mohon maaf, uang tidak cukup'. jika tidak maka, 
  tampilkan hasilObj dengan keyname .money
  6. pada langkah ini, kita akan membuat sebuah looping dengan inisialisasi variable i dengan nilai awal 0 dan sampai akhir nilai. looping ini untuk mengecek barang apa saja yang dibeli oleh member, dengan ketentuan member harus membeli barang dengan harga yang tertinggi terlebih dahulu.
    6a. jika harga barang kurang dari atau sama dengan money, maka tampilkan hasilObj dengan keyname .listPurchased
  
  
  
  
  
  */
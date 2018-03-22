function countProfit(shoppers) {
  let listBarang = [ ['Sepatu Stacattu', 1500000, 10],
                     ['Baju Zoro', 500000, 2],
                     ['Sweater Uniklooh', 175000, 1]
                   ];

  var hasilAkhir = []

  if(shoppers.length === 0){
    return hasilAkhir
  }

  //listBarang
  for(let a = 0; a < listBarang.length; a++){
    var isiObj = {}
    isiObj.product = listBarang[a][0]
    isiObj.pembeli = []

    //untuk mengecek apakah ada pembeli yang membeli barang sama
    var jmlAmount  = 0
    for(let b = 0; b < shoppers.length; b++){
      if(shoppers[b].product === isiObj.product && shoppers[b].amount <= listBarang[a][2]){
        jmlAmount += shoppers[b].amount
        isiObj.pembeli.push(shoppers[b].name)
      }    
    }
    
    //untuk mengecek apakah jumlah barang barang yang dibeli kurang dari stok yang tersedia
    if(jmlAmount <= listBarang[a][2]){

      isiObj.leftOver = listBarang[a][2] - jmlAmount
      if(isiObj.product === listBarang[0][0]){
        isiObj.totalProfit = jmlAmount * listBarang[0][1]
      } else if(isiObj.product === listBarang[1][0]){
        isiObj.totalProfit = jmlAmount * listBarang[1][1]
      } else { 
        isiObj.totalProfit = jmlAmount * listBarang[2][1]
      } 

    } else {

      isiObj.leftOver = listBarang[a][2]
      isiObj.totalProfit = 0

    }

    hasilAkhir.push(isiObj)
  }

  return hasilAkhir
}

// TEST CASES
console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 2}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 3}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 2}]));
//[ { product: 'Sepatu Stacattu',
//   shoppers: [ 'Windi', 'Vanessa' ],
//   leftOver: 5,
//   totalProfit: 7500000 },
// { product: 'Baju Zoro',
//   shoppers: [],
//   leftOver: 2,
//   totalProfit: 0 },
// { product: 'Sweater Uniklooh',
//   shoppers: [],
//   leftOver: 1,
//   totalProfit: 0 } ]

console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 8}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 11}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 1}, {name: 'Devi', product: 'Baju Zoro', amount: 1}, {name: 'Lisa', product: 'Baju Zoro', amount: 1}]));
// [ { product: 'Sepatu Stacattu',
//     shoppers: [ 'Windi' ],
//     leftOver: 2,
//     totalProfit: 12000000 },
//   { product: 'Baju Zoro',
//     shoppers: [ 'Devi', 'Lisa' ],
//     leftOver: 0,
//     totalProfit: 1000000 },
//   { product: 'Sweater Uniklooh',
//     shoppers: [ 'Rani' ],
//     leftOver: 0,
//     totalProfit: 175000 } ]
console.log(countProfit([{name: 'Windi', product: 'Sepatu Naiki', amount: 5}]));
// [ { product: 'Sepatu Stacattu',
//     shoppers: [],
//     leftOver: 10,
//     totalProfit: 0 },
//   { product: 'Baju Zoro',
//     shoppers: [],
//     leftOver: 2,
//     totalProfit: 0 },
//   { product: 'Sweater Uniklooh',
//     shoppers: [],
//     leftOver: 1,
//     totalProfit: 0 } ]
console.log(countProfit([])); //[]
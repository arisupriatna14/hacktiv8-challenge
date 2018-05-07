/* 
======================================
Array Mastery: The Most Frequent Item
======================================
Nama:________
[INSTRUKSI]
Function mostFrequentItem adalah function yang menerima satu parameter berupa array of string.
Function akan menghitung setiap jumlah item di dalam array tersebut.
Function akan mereturn nilai berupa string dengan pola:
=> nama barang(3), nama barang kedua(5), nama barang ketiga(10).
Kemudian, setiap barang yang ditampilkan harus berurut jumlahnya dari yang terkecil ke terbesar.
[CONTOH]
input: ['asus', 'asus', 'samsung', 'iphone', 'iphone', 'asus', 'asus']));
output: 'samsung(1), iphone(2) , asus(4)'


*/

function mostFrequentItem(arr){
    let obj = {}
    let hasil = ''
    for(let a = 0; a < arr.length; a++){
        if(obj[arr[a]] === undefined){
            obj[arr[a]] = 1
        } else {
            obj[arr[a]] += 1
        }
    }

    for(let key in obj){
        hasil += key + `(${obj[key]})` + ', '
    }

	return hasil.slice(0, hasil.length-2)
}

console.log(mostFrequentItem(['asus', 'asus', 'samsung', 'iphone', 'iphone', 'asus', 'asus'])); // 'samsung(1), iphone(2) , asus(4)'
console.log(mostFrequentItem(['9', 'b', 'b', 'c', '9', '9', 'b', '9', '2', '2'])); // 'c(1) , 2(2) ,b(3) ,9(4)'
console.log(mostFrequentItem(['book', 'laptop', 'iPod'])); // 'book(1), laptop(1), iPod(1)'
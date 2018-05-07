
/*jika modus tidak ditemuka, maka return -1.
jika didalam modus hanya ada 1 nilai yang sama, maka return -1*/

/*Algoritma:
1. ada array dan akan di looping untuk mencari nilai modus atau nilai yang sering muncul
2. tambahkan variable baru. yang pertama "minMod" dengan nilai 0, dan yang kedua "resultMod" = 0, yang ketiga 'angkaSamaSemua' dengan nilai 0
3. lakukan looping
	3a. looping pertama dimulai dengan index i = 0 sampai nilai akhir
	3b. dibawah looping pertama, kita butuh satu variabel lagi, untuk menampung berapa jumlah angka yang sering muncul. saya berinama variablenya 'frekMod' dengan nilai 0.
	3c. looping kedua dimulai dengan index j = 0 sampai nilai akhir
	3d. jika nilai dengan index i = 0 sama dengan nilai dengan index j = 0 DAN index i tidak sama dengan index J, maka 'frekMod' = 'frekMod' + 1
		3d1. jika 'frekMode' lebih dari "minMod", maka "minMod" = 'frekMode', lalu resultMod = i
4. jika 'minMod' sama dengan 0, maka return -1, //ini untuk mengecek apabila tidak ada angka yang sama.
5. sekarang lakukan perulangan kembali untuk mengecek apakah nilai didalam array tersebut sama semua.
	5a. looping dimulai dari index k = 0 sampai nilai akhir
	5b. 'angkaSamaSemua' += arr[k]
	5c. jika 'angkaSamaSemua' dibagi panjang nilai hasilnya sama dengan arr[k], maka return -1
6. return arr[frekMod] */

function cariModus(arr){
	var minMod = 0
	var resultMod = 0
	var angkaSamaSemua = 0

	for(var i = 0; i < arr.length; i++){
		var frekMod = 0
		for(var j = 0; j < arr.length; j++){
			if(arr[i] === arr[j] && i !== j){
				frekMod++
				if(frekMod > minMod){
					minMod = frekMod
					resultMod = i
				}
			}
		}
	}

	if(minMod === 0){
		return -1
	}

	//untuk mengecek apakah nilai didalam array sama semua atau tidak
	for(var k = 0; k < arr.length; k++){
		angkaSamaSemua += arr[k]
		if(angkaSamaSemua / arr.length === arr[k]){
			return -1
		}

	}
	
	return arr[resultMod]
}
console.log(cariModus([10, 4, 5, 2, 4])) // 4
console.log(cariModus([5, 10, 10, 6, 5])) // 5
console.log(cariModus([10, 3, 1, 2, 5])) // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])) // 3
console.log(cariModus([7, 7, 7, 7, 7])) // -1


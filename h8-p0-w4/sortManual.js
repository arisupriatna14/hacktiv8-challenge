function sortManual(num){
    for(var i = 0; i < num.length; i++){
        var target = num[i]
        for(var j = i - 1; j >= 0 && (num[j] > target); j--){
            num[j+1] = num[j]
        }
        num[j+1] = target
    }
    return num
}
console.log(sortManual([4, 5, 7, 2, 3, 10]))

/*
Algoritma sortManual :
1. lakukan perulangan dengan inisialisasi variable i = 0, sampai akhir nilai num
2. buat satu variable baru dengan nama 'target' dengan value num dengan index ke i
    2a. sekarang lakukan perulangan lagi yg kedua, dengan inisialisasi variable j sama dengan index ke i dikurangi 1, lalu kondisinya jika j lebih dari atau sama dengan 0 dan num dengan index ke j lebih dari target, dan j decrement
    2b. num dengan index ke j ditambah 1 sama dengan num dengan index ke j
3. num dengan index ke j ditambah 1 sama dengan target
4. kembalikan nilai num

*/
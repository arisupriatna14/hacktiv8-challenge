/*
==================================
Array Mastery: Shortest Word
==================================
Nama:________
[INSTRUCTION]
Disediakan sebuah kalimat. Function shortestWords akan menerima satu parameter berupa string
yang berisikan kalimat tersebut, dan akan mendapatkan jumlah huruf paling sedikit dari setiap kata,
kemudian mengembalikan nilai berupa array of string yang berisikan kata mana saja yang jumlahnya
sama dengan jumlah kata yang paling sedikit tersebut.
[EXAMPLE]
input (kalimat): Do you want to become a great coder.
panjang kata paling sedikit dalam kalimat: 1
output: ['a']
input (kalimat): You dont know what you have until you lose it!.
panjang kata paling sedikit dalam kalimat: 3
output: ['you', 'it!']
[CONSTRAINTS]
Dilarang menggunakan function .map/.filter/.reduce!
Diarang menggunakan regex!
/* EXPLAIN YOUR LOGIC BELOW! (Required) */
// Tidak harus formal pseudocode, tapi bagaimana step by step logikanya
// Nilai tidak valid (0) jika logic dan code berbeda!

function shortestWords(words) {
    var result = []
    let count = 1

    for(var a = 0; a < words.length; a++){
        if(words[a] === ' '){
            count++
        }
    }

    var wordsSplit = words.split(' ')
    var jumlahPerKata = 0
    var panjangKata = []
    var hasilAkhir = []
    var lowerWord = ''
    for(var b = 0; b < wordsSplit.length; b++){
        jumlahPerKata = wordsSplit[b].length
        panjangKata.push(jumlahPerKata)
    }

    var sortPanjangKata = panjangKata.sort()
    
    for(var i = 0; i < wordsSplit.length; i++){
        
        if(wordsSplit[i].length === sortPanjangKata[0] && wordsSplit){
            hasilAkhir.push(wordsSplit[i])
        }
        
    }
   
    return hasilAkhir

}

console.log(shortestWords('Do you want to become a great coder ?')); // ['a', '?']
console.log(shortestWords('You dont know what you have until you lose it!')); // ['you', 'it!']
console.log(shortestWords('I am diligent')); // ['I']
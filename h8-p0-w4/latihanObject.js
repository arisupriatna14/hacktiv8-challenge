//cobalah buat sebuah function yang menerima inputan dari object monster,
//jika atkPower Player lebih besar dari monster health maka player berhasil membunuh monster
// tersebut. dan masukan kedalam monster yang berhasil di bunuh oleh player tersebut

//expected output nya

//  [
//     {
//         name : 'Zack',
//         killed_monster : ['Artic Monkey','Dugong',...]
//     },
//     {
//         name ....
//     }
//  ]
let player = [
                ['Zack',800],
                ['Mariana',600],
                ['Agus Salim',500]
             ]


let monster = [
        {
            monster_name : "Artic Monkey",
            monster_hp : 400
        },

        {
            monster_name : "Dugong",
            monster_hp : 370
        },

        {
            monster_name : "Siluman Kampret",
            monster_hp : 700
        }
]

function monsterObj(game){
    var hasilObj = []
    
    for(let i = 0; i < player.length; i++){
        var isiObj = {}
        isiObj.name = player[i][0]
        isiObj.killed_monster = []
        for(let j = 0; j < monster.length; j++){
            if(monster[j].monster_hp <= player[i][1]){
                isiObj.killed_monster.push(monster[j].monster_name)
            }
        }
        hasilObj.push(isiObj)
    }

    return hasilObj
}
console.log(monsterObj(player, monster))

/*
Algoritma:
1. saya punya array multidimensi dan array of object, dimana kedua array tersebut akan saya looping.
2. sekarang buatlah satu variable baru untuk penampung array, dengan nama 'hasilObj'  dengan nilai array kosong.
3. lakukan looping dengan inisialisasinya variable i dengan nilai awal sama dengan 0, dan sampai akhir nilai.
    3a. dibawah looping, saya buat variable baru lagi untuk menampung object. saya berinama variablenya dengan 'isiObj' dengan nilai object kosong.
    3b. sekarang tuliskan variable object diikuti dengan keynamenya, yaitu '.name' dengan value player dengan index ke i dan index ke 0, untuk mengisi object dengan keyname .name dengan nama player.
    3b. selanjutnya tuliskan kembali variable object diikuti dengan keynamenya, yaitu '.killed_monster' dengan value array kosong.
    3c. sekarang lakukan looping kembali untuk mengecek, apakah atkPlayer lebih besar dari monsters health.
        pada perulangan ini dengan inisialisasi variable j dengan nilai awal 0 dan sampai akhir nilai.
        3c.1. jika monster dengan index j dan keynamenya '.monster_hp' kurang dari player dengan index ke i dan index ke 1, maka monster dengan index ke j dan keyname '.monster_name' di push/dimasukkan ke 'isiObj.killed_monster'
    3d. "isiObj" dipush ke dalam 'hasilObj'
4. return hasilObj



*/
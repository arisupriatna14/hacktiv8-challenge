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

function gameMonsters(games){
    let hasilAkhir = []

    for(let i = 0; i < player.length; i++){
        let isiObj = {}
        isiObj.name = player[i][0]
        isiObj.killed_monster = []
        for(let j = 0; j < monster.length; j++){
            if(monster[j].monster_hp <= player[i][1]){
                isiObj.killed_monster.push(monster[j].monster_name)
            }
        }
        hasilAkhir.push(isiObj)
    }
    return hasilAkhir

}
console.log(gameMonsters(player, monster))

/*Algoritma :
1. saya punya 2 buah array, array yang pertama isinya array, dan array yang kedua isinya object. kedua array tersebut akan saya looping.
2. buat variable baru untuk menampung hasil akhir, saya buat variable dengan nama 'hasilAkhir' dengan nilai array kosong.
3. sekarang lakukan looping, dengan inisialisasi variable i dengan nilai 0 sampai akhir nilai array.
    3a. sebelum melanjutkan ke langkah sebelumnya, saya membuutuhkan sebuah variable baru lagi untuk menampung object. saya buat variablenya dan namanya 'isiObj' dengan nilai object kosong
    3b. sekarang isi obj tersebut dengan key and value. yang pertama isi obj dengan 'isiObj.name' sama dengan player index i dan index 0, ini untuk mengisi key name dan value dari array player.
    3c. saya membutuhkan sebuah variable untuk menampung hasil killed_monster dengan nilai array kosong. ('isiObj.killed_monster = []')
    3c. sekarang lakukan looping kedua, untuk membandingkan atkPower player apakah lebih besar dari health monster,jika iya maka player berhasil membunuh monster. dan masukkan monster tersebut ke dalam array killed_monster. 
        3c1. looping dilakukan dengan inisialisasi variable j dengan nilai 0 sampai akhir nilai
        3c2. jika atkPower lebih besar dari health monster, maka masukkan monster kedalam array killed_monster. 
4. selesai*/
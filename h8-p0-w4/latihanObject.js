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
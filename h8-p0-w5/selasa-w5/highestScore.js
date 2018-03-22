function highestScore (students) {
    var isiObj = {}

    for(var a = 0; a < students.length; a++){
        
        if(isiObj[students[a].class] === undefined){
            isiObj[students[a].class] = students[a]
        } else {
          console.log(isiObj[students[a].class].score)
            if(students[a].score > isiObj[students[a].class].score){
                isiObj[students[a].class] = students[a]
                
            }
        }
        //console.log(students[a].score)
        //console.log(isiObj[students[a].class].score + " " + students[a].score)
    }

    //return isiObj
    

}
  
  // TEST CASE
  console.log(highestScore([
    {
      name: 'Dimitri',
      score: 60,
      class: 'foxes'
    },
    {
      name: 'Alexei',
      score: 55,
      class: 'wolves'
    },
    {
      name: 'Sergei',
      score: 74,
      class: 'foxes'
    },
    {
      name: 'Anastasia',
      score: 78,
      class: 'wolves'
    }
  ]));
  
  // {
  //   foxes: { name: 'Dimitri', score: 90 },
  //   wolves: { name: 'Alexei', score: 85 }
  // }
  
  
//   console.log(highestScore([
//     {
//       name: 'Alexander',
//       score: 100,
//       class: 'foxes'
//     },
//     {
//       name: 'Alisa',
//       score: 76,
//       class: 'wolves'
//     },
//     {
//       name: 'Vladimir',
//       score: 92,
//       class: 'foxes'
//     },
//     {
//       name: 'Albert',
//       score: 71,
//       class: 'wolves'
//     },
//     {
//       name: 'Viktor',
//       score: 80,
//       class: 'tigers'
//     }
//   ]));
  
  // {
  //   foxes: { name: 'Alexander', score: 100 },
  //   wolves: { name: 'Alisa', score: 76 },
  //   tigers: { name: 'Viktor', score: 80 }
  // }
  
  
  console.log(highestScore([])); //{}
function judgeVegetable (veggies, char) {
  let winner = 0
  let i = 0
  let person = []
  for (i = 0; i < veggies.length; i++) {
    if(veggies[i][char] > winner) {
      person = veggies[i].submitter;
      winner = veggies[i][char]
    }
  }
  return person
}

const veggies = [
  {
    submitter: 'Old Man Franklin',
    redness: 110,
    plumpness: 15
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 15,
    plumpness: 18
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 44,
    plumpness: 13
  }
]

const char = 'redness'

console.log(judgeVegetable(veggies, char))
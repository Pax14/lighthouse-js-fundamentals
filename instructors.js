const instructorWithLongestName = function(instructors) {
  // Put your solution here
  let longName = []
  let answer = []
  let final = []
    for(i = 0; i < instructors.length; i++) {
      let instName = instructors[i].name;
      if(longName.length < instName.length) {
        longName = instName;
        final = longName.indexOf(longName[i])
        answer = instructors[final]
      }
    }
  return answer
};

console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));
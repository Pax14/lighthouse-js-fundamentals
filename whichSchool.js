function whichSchool(age) {
  if (age < 13) {
    return ('Elementary School');
  } else if (age >18) {
    return ('Lighthouse Labs');
  } else {
    return ('Secondary School')
  }
}

console.log(whichSchool(35))
console.log(whichSchool(8))
console.log(whichSchool(14))
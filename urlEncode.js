const urlEncode = function(text) {
  // Put your solution here
  let final = [];
  let add = '%20'
  let newText = text.trim()
  for (let i = 0; i < newText.length; i++) {
    if(newText[i] === ' ') {
      final += add;
    } else {
      final += newText[i];
    }
  }
  return final
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));
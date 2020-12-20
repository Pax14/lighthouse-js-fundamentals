const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
let m = 0;
while (m < ingredients.length) {
  console.log(ingredients[m]);
  m++;
}
// Write a for loop that prints out the contents of ingredients:

for (let i = 0; i < ingredients.length; i++) {
  console.log(ingredients[i]);
}

for (let n = ingredients.length - 1; n >= 0; n--){
  console.log(ingredients[n]);
}

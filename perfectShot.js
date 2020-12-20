const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']  

const finalPosition = moves => {
  let finalSpotX = 0;
  let finalSpotY = 0;

  for (const move of moves) {
    if (move === 'north'){
      finalSpotY++
    } else if (move === 'south') {
      finalSpotY--
    } else if (move === 'east') {
      finalSpotX++
    } else if (move === 'west') {
      finalSpotX--
    }
  }  
  return [finalSpotX, finalSpotY];
}

console.log(finalPosition(moves))
const checkAir = function (samples, threshold) {
  // Code here!
  let final = []
  let dirty = 0
  let clean = 0

  for (i = 0; i < samples.length; i ++) {
    if(samples[i] === 'clean') {
      clean += 1;
    } else if(samples[i] === 'dirty') {
      dirty += 1;
    }
  }  
  if(dirty/(dirty+clean) > threshold) {
    final = 'Polluted'
  } else {
    final = 'Clean'
  }
  return final
};

console.log(checkAir(
  ['clean', 'clean', 'dirty', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'dirty'],
  0.3
));

console.log(checkAir(
  ['dirty', 'dirty', 'dirty', 'dirty', 'clean'],
  0.25
));

console.log(checkAir(
  ['clean', 'dirty', 'clean', 'dirty', 'clean', 'dirty', 'clean'],
  0.9
))
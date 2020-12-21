function smartGarbage (trash, bins) {
  let bin = []
  for (bin in bins) {
    if (trash === bin){
      bins[bin] += 1;
    }
  }
  return bins;
}


console.log(smartGarbage('recycling', { waste: 4, recycling: 2, compost: 5 }));
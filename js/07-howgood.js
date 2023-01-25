console.clear();
function betterThanAverage(classPoints, yourPoints) {
  let vid = 0;
  for (let i = 0; i < classPoints.length; i++) {
    sum =+ classPoints[i];
    vid += sum / classPoints.length;
    
  }
  
  if(vid > yourPoints){
    return false
  }

return true;

}


console.log(betterThanAverage([29, 55, 74, 60, 11, 90, 67, 28], 21), false);
console.log(betterThanAverage([2, 3], 5), true);

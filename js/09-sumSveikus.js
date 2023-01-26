console.clear();

function sk(params) {
  let sum =0;
  for (let i = 0; i < params.length; i++) {
    // console.log(params[i]);
    if (params[i] % 2 ===0) {
      sum += params[i];
      
    }
    
  }
  return sum;
}






console.log(sk([4, 3, 1, 2, 5, 10, 6, 7, 9, 8]));
function solution(str){
  let revStr = '';
  for (let i = str.length - 1; i >=0 ; i--){
    revStr += str[i];
  }
    
    return revStr;
}

console.log(solution('vsdfdgdv'));

// ---------------------------
// function solution(str){
//   return str.split('').reverse().join('');  
// }
// --------------------------
// const solution = str => str.split('').reverse().join('');
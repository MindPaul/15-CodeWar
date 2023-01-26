console.clear();

function arr(arr) {

  // filter((element, index) => { /* … */ }) . element nereikalingas ji neutralizuojam _ zenklu


  return arr.filter((_,i) => i % 2 ===0);
}



console.log(arr(["Keep", "Remove", "Keep", "Remove", "Keep"]));
console.log(arr([['Goodbye'], {'Great': 'Job'}]),[['Goodbye']]);
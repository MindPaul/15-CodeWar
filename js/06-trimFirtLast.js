// function trimStarsEnd(auka) {

//   return auka.slice(1, -1);
// }


// console.log(trimStarsEnd('labas'));

function trimStarsEnd(trim) {
  let ats = '';
  for (let i = 1; i < trim.length -1; i++){
    ats += trim[i];
  }
  return ats;
}

console.log(trimStarsEnd('labas'));
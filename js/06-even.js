console.clear();
function testEven(numb){
  
  if (numb % 2 === 0) {
    return true;
  }

  return  false;
}






console.log(testEven(0), true, "testEven for 0");
console.log(testEven(0.5), false, "testEven for 0.5");
console.log(testEven(1), false, "testEven for 1");
console.log(testEven(2), true, "testEven for 2");
console.log(testEven(-4), true, "testEven for 2");
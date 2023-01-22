console.clear();

function nr(a) {
 // verciami string(a) splitinam i masiva/reversinam ir per map verciam visus i skaicius "Number"
  return String(a).split('').reverse().map(x => Number(x))
}


console.log(nr("23445"));
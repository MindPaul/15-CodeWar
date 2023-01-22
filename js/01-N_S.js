console.clear();

function abbrevName(a) {
  const nameMasive = a.split(' '); //splitas is stringu gamina masica/sarasa/array paima pvz ("labas viso") ---> ['labas', 'viso']
//          cia pateikiame koordinates pirmuju raidziu
  return (nameMasive[0][0] + "." + nameMasive[1][0]).toUpperCase();
}

console.log(abbrevName("Jonas Petras"));
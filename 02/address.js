var street = [ 'Hope Street', 'Main Street', '1st Ave' ];
var apt = [ '', 'apt 6A', '', 'apt 4', '', 'apt 2B' ];
var city = [ 'Springfield,', 'Warwick,', 'Shelbyville,' ];
var state = [ 'NY', 'RI', 'CT' ];


function getHouseNumber

function getStreet() {
  return  [
    street[Math.floor(Math.random() * street.length)],
  ];
    
}

function getApt() {
  return  [
    apt[Math.floor(Math.random() * apt.length)],
  ];
}


function getCity() {
  return  [
    city[Math.floor(Math.random() * city.length)],
  ];
    
}

function getState() {
  return  [
    state[Math.floor(Math.random() * state.length)],
  ];
    
}

console.log(Math.floor((Math.random() * 5000) + 1), getStreet(), getApt(), getCity(), getState(), Math.floor((Math.random() * (99999 - 0) + 0));

// Can't figure out how to obtain random numbers that start with 0 in zip code. Example would be 02906
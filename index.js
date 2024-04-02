// Code your solution in this file!
function distanceFromHqInBlocks(someValue) {
  const hq = 42; 
  return Math.abs(someValue - hq); 
}


function distanceFromHqInFeet(someValue) {
  return distanceFromHqInBlocks(someValue) * 264;
}

function distanceTravelledInFeet(start, destination) {
  return Math.abs(start - destination) * 264; 
}

function calculatesFarePrice(start, destination) {
  const distance = distanceTravelledInFeet(start, destination);
  let fare = 0;

  if (distance <= 400) {
    fare = 0;
  } else if (distance > 400 && distance <= 2000) {
    fare = (distance - 400) * 0.02;
  } else if (distance > 2000 && distance < 2500) {
    fare = 25;
  } else if (distance >= 2500) {
    return 'cannot travel that far';
  }

  return fare;
}
// Code your solution in this file!
// distanceFromHqInBlocks: Returns the number of blocks from Scuber's headquarters to the pickup location.
function distanceFromHqInBlocks(someValue) {
    return Math.abs(someValue - 42); // Assuming Scuber's headquarters is on 42nd Street
  }
  
  // distanceFromHqInFeet: Returns the number of feet from Scuber's headquarters to the pickup location.
  function distanceFromHqInFeet(someValue) {
    const blocks = distanceFromHqInBlocks(someValue);
    return blocks * 264; // Each block is 264 feet long
  }
  
  // distanceTravelledInFeet: Calculates the number of feet a passenger travels given a starting block and an ending block.
  // It only calculates distance North and South (uptown/downtown). It uses the knowledge that a block is 264 feet long.
  function distanceTravelledInFeet(start, destination) {
    return Math.abs(destination - start) * 264; // Each block is 264 feet long
  }
  
  // calculatesFarePrice: Given the same starting and ending block as the previous test, return the fare for the customer.
  // The first 400 feet are free. For a distance between 400 and 2000 feet, the price is 2 cents per foot
  // Then Scuber charges a flat fare of $25 for a distance over 2000 feet and under 2500 feet.
  // Finally, Scuber does not allow any rides over 2500 feet — the function returns 'cannot travel that far'.
  function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
    if (distance <= 400) {
      return 0; // First 400 feet are free
    } else if (distance > 400 && distance <= 2000) {
      return (distance - 400) * 0.02; // 2 cents per foot after the first 400 feet
    } else if (distance > 2000 && distance < 2500) {
      return 25; // Flat fare of $25 for distance over 2000 feet and under 2500 feet
    } else {
      return 'cannot travel that far'; // Scuber does not allow any rides over 2500 feet
    }
  }
  
  module.exports = {
    distanceFromHqInBlocks,
    distanceFromHqInFeet,
    distanceTravelledInFeet,
    calculatesFarePrice
  };
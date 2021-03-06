/*!
 * Make Object Properties Private - Front End Development Certification
 *
 * Authored by Francis Go
 * https://github.com/fgo/freecodecamp
 */

var Car = function() {
  // this is a private variable
  var speed = 10;

  // these are public methods
  this.accelerate = function(change) {
    speed += change;
  };

  this.decelerate = function() {
    speed -= 5;
  };

  this.getSpeed = function() {
    return speed;
  };
};

var Bike = function() {
  // Only change code below this line.
  // this is a private variable
  var gear = 0;

  // these are public methods
  this.getGear = function() {
    return gear;
  };

  this.setGear = function(change) {
    gear = change;
  };
};

var myCar = new Car();

var myBike = new Bike();

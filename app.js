// defining an array for the initial passengers:
let passengers = ["John", "Steve", "Sam", "Danielle"];

// declare k for counting passengers:
let k = 0;

let speedometer, fuel;

// function for fuel low warning:
function warn(fuel, shields) {
  if (shields == true && fuel < 30) {
    console.log("fuel is low, turning off shields...");
  }
}

// function for informing about fuel level and current distance:
function info(fuel, speedometer) {
  console.log("the SpaceShip is at: " + speedometer);
  console.log("the spaceship has: " + fuel + " fuel left");
}

// declaring a class for the spaceships:
class SpaceShip {
  constructor(name, passengers) {
    this.name = name;
    this.passengers = passengers;
    this.fuel = 400;
    this.shields = true;
    this.speedometer = 0;
  }
  listPassengers() {
    for (let i = 0; i < passengers.length; i++) {
      k = k + 1;
      console.log("Passenger " + k + ": " + passengers[i]);
    }
  }
  addPassenger(newPassenger) {
    passengers.push(newPassenger);
    console.log(newPassenger + " was added to the ship");
  }
  travel(distance) {
    console.log("trying to travel: " + distance);
    // no fuel:
    if (this.fuel == 0) {
      console.log("can't go further, tank is empty");

      // we have fuel, but less then we need:
    } else {
      if (distance > this.fuel * 2) {
        console.log("can only travel: " + this.fuel * 2);
        this.speedometer = this.speedometer + this.fuel * 2;
        this.fuel = 0;
        warn(this.fuel, this.shields);
        info(this.fuel, this.speedometer);
        this.shields = false;

        // we have enough fuel, but fuel goes below 30:
      } else if (distance > this.fuel * 2 - 60) {
        this.speedometer = this.speedometer + distance;
        this.fuel = this.fuel - distance / 2;
        warn(this.fuel, this.shields);
        info(this.fuel, this.speedometer);
        this.shields = false;

        // everything is ok:
      } else {
        this.speedometer = this.speedometer + distance;
        this.fuel = this.fuel - distance / 2;
        info(this.fuel, this.speedometer);
      }
    }
  }
}
// instantiating the class SpaceShip with a name, and passengers:
let ship1 = new SpaceShip("Startrek", passengers);

// running the tasks:
ship1.listPassengers();
ship1.addPassenger("Lindsay");
ship1.listPassengers();
ship1.travel(750);
ship1.travel(200);
ship1.travel(100);

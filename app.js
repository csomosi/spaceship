// travel metódust kell megírni még, és tisztázni az egészet.

// defining an array for the initial passengers:
let passengers = ["John", "Steve", "Sam", "Danielle"];
// declare k for numbering passengers:
let k = 0;

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
  travel() {}
}

// instantitiating the spaceship with a name, and passengers:
let ship1 = new SpaceShip("Startrek", passengers);

// running the tasks:
ship1.listPassengers();
ship1.addPassenger("Lindsay");
ship1.listPassengers();

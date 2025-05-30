// import the Vehicle, Motorbike, Car, Wheel, and AbleToTow classes/interfaces
import Vehicle from './Vehicle.js';
import Motorbike from './Motorbike.js';
import Car from './Car.js';
import Wheel from './Wheel.js';
import AbleToTow from '../interfaces/AbleToTow.js';

// TODO: The Truck class should extend the Vehicle class and should implement the AbleToTow interface
class Truck extends Vehicle implements AbleToTow {
  // TODO: Declare properties of the Truck class
  // TODO: The properties should include vin, color, make, model, year, weight, top speed, wheels, and towing capacity
  // TODO: The types should be as follows: vin (string), color (string), make (string), model (string), year (number), weight (number), topSpeed (number), wheels (Wheel[]), towingCapacity (number)

  // TODO: Create a constructor that accepts the properties of the Truck class
    // TODO: The constructor should call the constructor of the parent class, Vehicle
    // TODO: The constructor should initialize the properties of the Truck class
    // TODO: The constructor should check if the wheels array has 4 elements and create 4 new default Wheel objects if it does not

  // TODO: Implement the tow method from the AbleToTow interface
  tow(weight: number): void {
    // TODO: Get the make an model of the vehicle if it exists
    // TODO: Check if the vehicle's weight is less than or equal to the truck's towing capacity
    // TODO: If it is, log that the vehicle is being towed
    // TODO: If it is not, log that the vehicle is too heavy to be towed
    if (weight <= this.towingCapacity) {
      console.log(`Truck is towing ${weight} lbs successfully.`);
    } else {
      console.log(`Warning: ${weight} lbs exceeds towing capacity of ${this.towingCapacity} lbs.`);
    }
  }

  // TODO: Override the printDetails method from the Vehicle class
    // TODO: The method should call the printDetails method of the parent class
    // TODO: The method should log the details of the Truck
    // TODO: The details should include the VIN, make, model, year, weight, top speed, color, towing capacity, and wheels
  override printDetails(): void {
    super.printDetails();
    console.log(`Towing Capacity: ${this.towingCapacity} lbs`);
    console.log(`Bed Length: ${this.bedLength} feet`);
    console.log(`4x4: ${this.is4x4 ? 'Yes' : 'No'}`);
    console.log('Wheels:');
    this.wheels.forEach((wheel, index) => {
      console.log(`  Wheel ${index + 1}: ${wheel.getDiameter}" ${wheel.getTireBrand}`);
    });
  }

  // Additional properties specific to trucks
  towingCapacity: number;
  bedLength: number;
  is4x4: boolean;
  wheels: Wheel[];

  // Constructor for Truck class
  constructor(
    vin: string,
    color: string,
    make: string,
    model: string,
    year: number,
    weight: number,
    topSpeed: number,
    towingCapacity: number,
    bedLength: number,
    is4x4: boolean,
    wheels: Wheel[] = []
  ) {
    super(vin, color, make, model, year, weight, topSpeed);
    this.towingCapacity = towingCapacity;
    this.bedLength = bedLength;
    this.is4x4 = is4x4;
    
    // Initialize wheels if not provided
    if (wheels.length !== 4) {
      this.wheels = Array(4).fill(new Wheel());
    } else {
      this.wheels = wheels;
    }
  }

  // Unique truck method for engaging 4x4
  engage4x4(): void {
    if (this.is4x4) {
      console.log('4x4 system engaged.');
    } else {
      console.log('This truck is not equipped with 4x4.');
    }
  }
}

// Export the Truck class as the default export
export default Truck;

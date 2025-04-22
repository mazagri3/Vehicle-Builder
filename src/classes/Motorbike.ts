// Import necessary classes
import Vehicle from './Vehicle.js';

// Motorbike class extends Vehicle
class Motorbike extends Vehicle {
  // Additional properties specific to motorbikes
  engineSize: number;
  hasSidecar: boolean;
  isSportBike: boolean;

  // Constructor for Motorbike class
  constructor(
    vin: string,
    color: string,
    make: string,
    model: string,
    year: number,
    weight: number,
    topSpeed: number,
    engineSize: number,
    hasSidecar: boolean,
    isSportBike: boolean
  ) {
    super(vin, color, make, model, year, weight, topSpeed);
    this.engineSize = engineSize;
    this.hasSidecar = hasSidecar;
    this.isSportBike = isSportBike;
  }

  // Override printDetails to include motorbike-specific properties
  override printDetails(): void {
    super.printDetails();
    console.log(`Engine Size: ${this.engineSize}cc`);
    console.log(`Has Sidecar: ${this.hasSidecar ? 'Yes' : 'No'}`);
    console.log(`Sport Bike: ${this.isSportBike ? 'Yes' : 'No'}`);
  }

  // Unique motorbike method for wheelie
  doWheelie(): void {
    if (this.isSportBike) {
      console.log('Performing a wheelie!');
    } else {
      console.log('This bike is not suitable for wheelies.');
    }
  }

  // Unique motorbike method for sidecar operations
  toggleSidecar(): void {
    if (this.hasSidecar) {
      console.log('Sidecar toggled.');
    } else {
      console.log('This bike does not have a sidecar.');
    }
  }
}

export default Motorbike;

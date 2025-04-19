// importing classes from other files
import inquirer from "inquirer";
import Truck from "./Truck.js";
import Car from "./Car.js";
import Motorbike from "./Motorbike.js";
import Wheel from "./Wheel.js";

// define the Cli class
class Cli {
  // Updated vehicles property to accept all vehicle types
  vehicles: (Car | Truck | Motorbike)[];
  selectedVehicleVin: string | undefined;
  exit: boolean = false;

  // Updated constructor to accept all vehicle types
  constructor(vehicles: (Car | Truck | Motorbike)[]) {
    this.vehicles = vehicles;
  }

  // Generate a random VIN
  static generateVin(): string {
    return Math.random().toString(36).substring(2, 15).toUpperCase();
  }

  // method to choose a vehicle from existing vehicles
  chooseVehicle(): void {
    inquirer
      .prompt([
        {
          type: 'list',
          name: 'selectedVehicleVin',
          message: 'Select a vehicle to perform an action on',
          choices: this.vehicles.map((vehicle) => {
            return {
              name: `${vehicle.vin} -- ${vehicle.make} ${vehicle.model}`,
              value: vehicle.vin,
            };
          }),
        },
      ])
      .then((answers) => {
        // set the selectedVehicleVin to the vin of the selected vehicle
        this.selectedVehicleVin = answers.selectedVehicleVin;
        // perform actions on the selected vehicle
        this.performActions();
      });
  }

  // Updated createVehicle method to handle all vehicle types
  async createVehicle(): Promise<void> {
    const { vehicleType } = await inquirer.prompt([
      {
        type: "list",
        name: "vehicleType",
        message: "What type of vehicle would you like to create?",
        choices: ["Car", "Truck", "Motorbike"],
      },
    ]);

    switch (vehicleType) {
      case "Car":
        await this.createCar();
        break;
      case "Truck":
        await this.createTruck();
        break;
      case "Motorbike":
        await this.createMotorbike();
        break;
    }
  }

  // method to create a car
  createCar(): void {
    inquirer
      .prompt([
        {
          type: 'input',
          name: 'color',
          message: 'Enter Color',
        },
        {
          type: 'input',
          name: 'make',
          message: 'Enter Make',
        },
        {
          type: 'input',
          name: 'model',
          message: 'Enter Model',
        },
        {
          type: 'input',
          name: 'year',
          message: 'Enter Year',
        },
        {
          type: 'input',
          name: 'weight',
          message: 'Enter Weight',
        },
        {
          type: 'input',
          name: 'topSpeed',
          message: 'Enter Top Speed',
        },
      ])
      .then((answers) => {
        const car = new Car(
          // TODO: The generateVin method is static and should be called using the class name Cli, make sure to use Cli.generateVin() for creating a truck and motorbike as well!
          Cli.generateVin(),
          answers.color,
          answers.make,
          answers.model,
          parseInt(answers.year),
          parseInt(answers.weight),
          parseInt(answers.topSpeed),
          []
        );
        // push the car to the vehicles array
        this.vehicles.push(car);
        // set the selectedVehicleVin to the vin of the car
        this.selectedVehicleVin = car.vin;
        // perform actions on the car
        this.performActions();
      });
  }

  // Implement createTruck method
  async createTruck(): Promise<void> {
    const answers = await inquirer.prompt([
      {
        type: "input",
        name: "color",
        message: "Enter the color:",
      },
      {
        type: "input",
        name: "make",
        message: "Enter the make:",
      },
      {
        type: "input",
        name: "model",
        message: "Enter the model:",
      },
      {
        type: "input",
        name: "year",
        message: "Enter the year:",
        validate: (input: string) => !isNaN(parseInt(input)) || "Please enter a valid number",
      },
      {
        type: "input",
        name: "weight",
        message: "Enter the weight (lbs):",
        validate: (input: string) => !isNaN(parseFloat(input)) || "Please enter a valid number",
      },
      {
        type: "input",
        name: "topSpeed",
        message: "Enter the top speed (mph):",
        validate: (input: string) => !isNaN(parseFloat(input)) || "Please enter a valid number",
      },
      {
        type: "input",
        name: "towingCapacity",
        message: "Enter the towing capacity (lbs):",
        validate: (input: string) => !isNaN(parseFloat(input)) || "Please enter a valid number",
      },
      {
        type: "input",
        name: "bedLength",
        message: "Enter the bed length (feet):",
        validate: (input: string) => !isNaN(parseFloat(input)) || "Please enter a valid number",
      },
      {
        type: "confirm",
        name: "is4x4",
        message: "Is this a 4x4 truck?",
      },
    ]);

    const truck = new Truck(
      Cli.generateVin(),
      answers.color,
      answers.make,
      answers.model,
      parseInt(answers.year),
      parseFloat(answers.weight),
      parseFloat(answers.topSpeed),
      parseFloat(answers.towingCapacity),
      parseFloat(answers.bedLength),
      answers.is4x4
    );

    this.vehicles.push(truck);
    console.log("Truck created successfully!");
  }

  // Implement createMotorbike method
  async createMotorbike(): Promise<void> {
    const answers = await inquirer.prompt([
      {
        type: "input",
        name: "color",
        message: "Enter the color:",
      },
      {
        type: "input",
        name: "make",
        message: "Enter the make:",
      },
      {
        type: "input",
        name: "model",
        message: "Enter the model:",
      },
      {
        type: "input",
        name: "year",
        message: "Enter the year:",
        validate: (input: string) => !isNaN(parseInt(input)) || "Please enter a valid number",
      },
      {
        type: "input",
        name: "weight",
        message: "Enter the weight (lbs):",
        validate: (input: string) => !isNaN(parseFloat(input)) || "Please enter a valid number",
      },
      {
        type: "input",
        name: "topSpeed",
        message: "Enter the top speed (mph):",
        validate: (input: string) => !isNaN(parseFloat(input)) || "Please enter a valid number",
      },
      {
        type: "input",
        name: "engineSize",
        message: "Enter the engine size (cc):",
        validate: (input: string) => !isNaN(parseFloat(input)) || "Please enter a valid number",
      },
      {
        type: "confirm",
        name: "hasSidecar",
        message: "Does this bike have a sidecar?",
      },
      {
        type: "confirm",
        name: "isSportBike",
        message: "Is this a sport bike?",
      },
    ]);

    const motorbike = new Motorbike(
      Cli.generateVin(),
      answers.color,
      answers.make,
      answers.model,
      parseInt(answers.year),
      parseFloat(answers.weight),
      parseFloat(answers.topSpeed),
      parseFloat(answers.engineSize),
      answers.hasSidecar,
      answers.isSportBike
    );

    this.vehicles.push(motorbike);
    console.log("Motorbike created successfully!");
  }

  // method to find a vehicle to tow
  async findVehicleToTow(truck: Truck): Promise<void> {
    const { vehicleToTow } = await inquirer.prompt([
      {
        type: 'list',
        name: 'vehicleToTow',
        message: 'Select a vehicle to tow',
        choices: this.vehicles
          .filter(v => v.vin !== truck.vin)
          .map(vehicle => ({
            name: `${vehicle.make} ${vehicle.model} (${vehicle.weight} lbs)`,
            value: vehicle,
          })),
      },
    ]);

    truck.tow(vehicleToTow.weight);
    this.performActions();
  }

  // method to perform actions on a vehicle
  performActions(): void {
    const selectedVehicle = this.vehicles.find(v => v.vin === this.selectedVehicleVin);
    if (!selectedVehicle) {
      console.log('No vehicle selected');
      this.startCli();
      return;
    }

    inquirer
      .prompt([
        {
          type: 'list',
          name: 'action',
          message: 'Select an action',
          choices: [
            'Print details',
            'Start vehicle',
            'Accelerate 5 MPH',
            'Decelerate 5 MPH',
            'Stop vehicle',
            'Turn right',
            'Turn left',
            'Reverse',
            ...(selectedVehicle instanceof Truck ? ['Engage 4x4', 'Tow vehicle'] : []),
            ...(selectedVehicle instanceof Motorbike ? ['Do wheelie', 'Toggle sidecar'] : []),
            'Select or create another vehicle',
            'Exit',
          ],
        },
      ])
      .then((answers) => {
        switch (answers.action) {
          case 'Print details':
            selectedVehicle.printDetails();
            break;
          case 'Start vehicle':
            selectedVehicle.start();
            break;
          case 'Accelerate 5 MPH':
            selectedVehicle.accelerate(5);
            break;
          case 'Decelerate 5 MPH':
            selectedVehicle.decelerate(5);
            break;
          case 'Stop vehicle':
            selectedVehicle.stop();
            break;
          case 'Turn right':
            selectedVehicle.turn('right');
            break;
          case 'Turn left':
            selectedVehicle.turn('left');
            break;
          case 'Reverse':
            selectedVehicle.reverse();
            break;
          case 'Engage 4x4':
            if (selectedVehicle instanceof Truck) {
              selectedVehicle.engage4x4();
            }
            break;
          case 'Tow vehicle':
            if (selectedVehicle instanceof Truck) {
              this.findVehicleToTow(selectedVehicle);
              return;
            }
            break;
          case 'Do wheelie':
            if (selectedVehicle instanceof Motorbike) {
              selectedVehicle.doWheelie();
            }
            break;
          case 'Toggle sidecar':
            if (selectedVehicle instanceof Motorbike) {
              selectedVehicle.toggleSidecar();
            }
            break;
          case 'Select or create another vehicle':
            this.startCli();
            return;
          case 'Exit':
            this.exit = true;
            return;
        }

        if (!this.exit) {
          this.performActions();
        }
      });
  }

  // method to start the cli
  startCli(): void {
    inquirer
      .prompt([
        {
          type: 'list',
          name: 'CreateOrSelect',
          message:
            'Would you like to create a new vehicle or perform an action on an existing vehicle?',
          choices: ['Create a new vehicle', 'Select an existing vehicle'],
        },
      ])
      .then((answers) => {
        // check if the user wants to create a new vehicle or select an existing vehicle
        if (answers.CreateOrSelect === 'Create a new vehicle') {
          this.createVehicle();
        } else {
          this.chooseVehicle();
        }
      });
  }
}

// export the Cli class
export default Cli;

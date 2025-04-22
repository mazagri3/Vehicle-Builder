# Vehicle Builder

A TypeScript-based object-oriented programming project that demonstrates the implementation of vehicles (Cars, Trucks, and Motorbikes) using inheritance, interfaces, and encapsulation.

## Project Overview

This project implements a vehicle management system where different types of vehicles can be created and managed through a command-line interface. The system demonstrates key OOP concepts including:

- Inheritance (Vehicle as base class, with Car, Truck, and Motorbike as derived classes)
- Interfaces (Driveable and AbleToTow)
- Encapsulation (private properties with getter/setter methods)
- Polymorphism (through method overriding)

## Features

- Create and manage different types of vehicles (Cars, Trucks, Motorbikes)
- Each vehicle has basic properties like VIN, color, make, model, year, weight, and top speed
- Vehicles can perform actions like:
  - Start/Stop
  - Accelerate/Decelerate
  - Turn
  - Reverse
- Trucks have additional towing capabilities
- Each vehicle comes with wheels (customizable diameter and tire brand)
- Command-line interface for interacting with the system

## Project Structure

```
src/
├── classes/
│   ├── Vehicle.ts     # Base vehicle class
│   ├── Car.ts         # Car class extending Vehicle
│   ├── Truck.ts       # Truck class extending Vehicle
│   ├── Motorbike.ts   # Motorbike class extending Vehicle
│   ├── Wheel.ts       # Wheel class for vehicle wheels
│   └── Cli.ts         # Command-line interface
├── interfaces/
│   ├── Driveable.ts   # Interface for vehicle operations
│   └── AbleToTow.ts   # Interface for towing capabilities
└── index.ts           # Application entry point
```

## Prerequisites

- Node.js (v12 or higher)
- npm (Node Package Manager)

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```bash
   cd vehicle-builder
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

## Running the Application

1. Build the TypeScript code:
   ```bash
   npm run build
   ```

2. Start the application:
   ```bash
   npm run start
   ```

Or use the combined command:
```bash
npm run dev
```

## Class Structure

### Vehicle (Base Class)
- Properties:
  - vin: string
  - color: string
  - make: string
  - model: string
  - year: number
  - weight: number
  - topSpeed: number
  - started: boolean
  - currentSpeed: number
- Methods:
  - start()
  - accelerate(change: number)
  - decelerate(change: number)
  - stop()
  - turn(direction: string)
  - reverse()
  - printDetails()

### Car (Extends Vehicle)
- Additional Properties:
  - wheels: Wheel[]
- Methods:
  - Override printDetails()

### Wheel
- Properties:
  - diameter: number
  - tireBrand: string
- Methods:
  - getDiameter()
  - getTireBrand()

## Interfaces

### Driveable
Defines the basic operations that all vehicles must implement:
- start()
- accelerate()
- decelerate()
- stop()
- turn()
- reverse()

### AbleToTow
Defines towing capabilities for vehicles:
- towingCapacity: number
- tow(weight: number)

## Development

The project uses TypeScript with strict type checking and follows object-oriented programming principles. To modify or extend the project:

1. Make changes to the TypeScript files in the `src` directory
2. Build the project using `npm run build`
3. Test your changes using `npm run start`

## License

ISC

## Author

[Your Name]

## Your Task

Your task is to update an existing TypeScript command-line application that builds and uses cars to have additional options for motorbikes and trucks. The application prompts the user to create a new vehicle or select an existing vehicle. After going through the creation process or the selection process, the user is able to perform certain actions with the selected vehicle. The user is returned to the actions menu after each action until they decide to exit the application.

## Walkthrough Video

[Click here to view the walkthrough video](YOUR_VIDEO_LINK_HERE)

The video demonstrates:
- Creating a new truck with towing capacity and 4x4 features
- Creating a new motorbike with engine size and sidecar options
- Using the unique features of each vehicle type
- The towing functionality of trucks
- All basic vehicle operations (start, accelerate, turn, etc.)

## User Story

```md
AS a developer
I WANT to update an existing application to include additional vehicle types
SO THAT I am able to comprehend and work with existing code bases.
```

## Acceptance Criteria

```md
GIVEN a command-line application that accepts user input
WHEN I am prompted to create a new vehicle or existing vehicle
THEN I can choose between the two options
WHEN I am prompted to choose the vehicle type during creation
THEN I can choose between car, truck, and motorbike
WHEN I am prompted for details about the vehicle
THEN I can enter the vehicle information
WHEN I have entered all the vehicle information
THEN I can use the created vehicle
WHEN I select an existing vehicle
THEN I can use the selected existing vehicle
WHEN I have created a new vehicle or selected an existing vehicle
THEN I can perform actions with that vehicle
WHEN I perform an action with a vehicle
THEN I see the result of the action in the command-line
WHEN I complete the process of performing an action
THEN I can perform additional actions until I choose to exit
```

## Additional Requirements

This Challenge combines many of the skills covered so far. In addition to the user story and acceptance criteria, we've provided some guidelines to help you get started.

Because this Challenge requires a video submission, refer to the [Full-Stack Blog video submission guide](https://coding-boot-camp.github.io/full-stack/computer-literacy/video-submission-guide) for guidance on creating and sharing a video.

Your application should use [Inquirer](https://www.npmjs.com/package/inquirer) for collecting input from the user. The application will be invoked by using the following command:

```bash
npm start
```

## 📝 Notes

Moving forward, you will be provided with the `tsconfig.json` file. This is to reflect the fact that most companies assign you projects with these configurations already set up.

## Helpful TypeScript Resources

* [Classes](https://www.typescriptlang.org/docs/handbook/2/classes.html)

* [Object types](https://www.typescriptlang.org/docs/handbook/2/objects.html)

* [Everyday types](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)

* [More on functions](https://www.typescriptlang.org/docs/handbook/2/functions.html)

## Grading Requirements

> **Note** If a Challenge assignment submission is marked as "0," it is considered incomplete and will not count towards your graduation requirements. Examples of incomplete submissions include:
>
> * A repository that has no code
>
> * A repository that includes a unique name but nothing else
>
> * A repository that includes only a README file but nothing else
>
> * A repository that only includes starter code

This Challenge is graded based on the following criteria:

### Deliverables: 20%

* A walkthrough video that demonstrates the functionality of the Vehicle Builder.

* Your GitHub repository containing your application code.

### Walkthrough Video: 27%

* The `README.md` file must include a link to the walkthrough video.

* The walkthrough video must demonstrate how a user would invoke the application from the command line.

* The walkthrough video must demonstrate how a user would enter responses to all of the prompts in the application.

* The walkthrough video must demonstrate all the prompts and functionality related to trucks and motorbikes working properly.

### Technical Acceptance Criteria: 40%

* Satisfies all of the preceding acceptance criteria plus the following:

  * It uses the [Inquirer package](https://www.npmjs.com/package/inquirer).

  * The application must have properly implemented `Truck` and `Motorbike` classes:

    * The user should be able to choose between a car, a truck, or a motorbike when creating a vehicle.

    * The `Truck` and `Motorbike` classes must prompt the user for details that the `Car` class doesn't.

    * The `Truck` class must allow the user to implement an action that the `Car` and `Motorbike` classes cannot.

### Repository Quality: 13%

* Repository has a unique name.

* Repository follows best practices for file structure and naming conventions.

* Repository follows best practices for class/id naming conventions, indentation, quality comments, etc.

* Repository contains multiple descriptive commit messages.

* Repository contains a high-quality readme with description and a link to a walkthrough video.

## Review

You are required to submit the following for review:

* A walkthrough video that demonstrates the functionality of the application.

* The URL of the GitHub repository, with a unique name and a README describing the project.

---
&copy; 2024 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.

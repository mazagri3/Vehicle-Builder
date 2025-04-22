# Vehicle Builder

A TypeScript-based object-oriented programming project that demonstrates the implementation of vehicles (Cars, Trucks, and Motorbikes) using inheritance, interfaces, and encapsulation.

## Project Overview

This project implements a vehicle management system where different types of vehicles can be created and managed through a command-line interface. The system demonstrates key OOP concepts including:

- Inheritance (Vehicle as base class, with Car, Truck, and Motorbike as derived classes)
- Interfaces (Driveable and AbleToTow)
- Encapsulation (private properties with getter/setter methods)
- Polymorphism (through method overriding)

## Walkthrough Video

[Click here to view the walkthrough video](https://drive.google.com/file/d/1GOVB-AcDmVEihuuBKwiWKxi9Us4I8xOS/view?usp=sharing)

The video demonstrates:
- Creating a new truck with towing capacity and 4x4 features
- Creating a new motorbike with engine size and sidecar options
- Using the unique features of each vehicle type
- The towing functionality of trucks
- All basic vehicle operations (start, accelerate, turn, etc.)

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

```
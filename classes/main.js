// create a class
class Car {
    constructor(carId) {
        this.carId = carId
    }
    // methods
    getCar() {
        return `Car ID: ${ this.carId }`
    }
}
let car = new Car('Premio');
// console.log(car.carId);
// console.log(car.getCar());

// inheritance
class Vehicle extends Car{

}
let vehicle = new Vehicle('Vehicle');
console.log(vehicle.getCar());
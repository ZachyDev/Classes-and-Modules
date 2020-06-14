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
console.log(car.getCar());
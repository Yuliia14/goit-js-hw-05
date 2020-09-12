class Car {
  // Write code under this line
  static getSpecs(car) {
    return `maxSpeed: ${car.maxSpeed}, speed: ${car.speed}, isOn: ${car.isOn}, distance: ${car.distance}, price: ${car._price}`;
  }
  constructor({ speed = 0, price, maxSpeed, isOn = false, distance = 0 }) {
    this.speed = speed;
    this._price = price;
    this.maxSpeed = maxSpeed;
    this.isOn = isOn;
    this.distance = distance;
  }

  get price() {
    return this._price;
  }
  set price(value) {
    this._price = value;
  }
  turnOff() {
    this.isOn = false;
    this.speed = 0;
  }
  turnOn() {
    this.isOn = true;
  }
  accelerate(value) {
    let currentSpeed = this.speed + value;
    this.maxSpeed >= currentSpeed
      ? (this.speed = currentSpeed)
      : (this.speed = this.maxSpeed);
  }
  decelerate(value) {
    let currentSpeed = this.speed - value;
    currentSpeed > 0 ? (this.speed = currentSpeed) : (this.speed = 0);
  }
  drive(hours) {
    if (this.isOn) {
      this.distance += this.speed * hours;
    }
  }
}
const mustang = new Car({ maxSpeed: 200, price: 2000 });
mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

console.log(Car.getSpecs(mustang));
// 'maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000'

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

console.log(Car.getSpecs(mustang));
// 'maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000'

console.log(mustang.price); // 2000
mustang.price = 4000;
console.log(mustang.price); // 4000

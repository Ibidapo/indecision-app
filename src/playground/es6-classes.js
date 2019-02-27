class Person {
  constructor(name = 'Anonymous', age = 0) {
    this.name = name;
    this.age = age;
  }

  getGreeting() {
    return `Hi, I am ${this.name}!`;
  }

  getDescription() {
    return `${this.name} is ${this.age} year(s) old.`
  }
}

class Traveler extends Person {
  constructor(name = 'Anonymous', age = 0, homeLocation) {
    super(name, age);
    this.homeLocation = homeLocation;
  }

  getGreeting() {
    let getGreeting = super.getGreeting();

    if (!!this.homeLocation) {
      getGreeting += ` I am visiting from ${this.homeLocation}.`;
    }

    return getGreeting;
  }
}

const me = new Traveler('Ibidapo Rasheed', '25', 'Lagos');
console.log(me.getGreeting());
// console.log(me.getDescription());

const noOne = new Traveler();
console.log(noOne.getGreeting());
// console.log(noOne.getDescription());
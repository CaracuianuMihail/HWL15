// Finisati exercitiu inceput la lectie. //
class Animal{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
display(){
    console.log(`Name: ${this.name}, Age: ${this.age}`);
}
}

class Cat extends Animal{
    constructor(name, age, color){
        super(name, age)
        this.color = color;
    }
    display(){
        console.log(`Name: ${this.name}, Age: ${this.age}, Color: ${this.color}`);
    }
    meow() {
        console.log(`${this.name} says: Meow!`);
      }
}

class Dog extends Animal{
    constructor(name, age, breed){
        super(name, age)
        this.breed = breed;
    }
    display(){
        console.log(`\nName: ${this.name}, Age: ${this.age}, Breed: ${this.breed}`);
    }
    bark(){
        console.log(`${this.name} says: Woof!`);
    }
}

const myCat = new Cat("Garfield", 2, "Orange");
myCat.display();
myCat.meow();

const myDog = new Dog("Sirius", 5, "Black");
myDog.display();
myDog.bark();

const myDogs = new Dog("Rex", 5, "Brown");
myDogs.display();
myDogs.bark();

// Creati o clasa ce tine de orice tema va este aproape, apoi extindeti din ea inca 2 clase si creai cate un obiect cu ajutorul lor. //

    class Audi{
        constructor(model, year, colors){
            this.model = model;
            this.year = year;
            this.colors = colors;
        }
        display(){
            console.log(`Model: ${this.model}, Year: ${this.year}, Color: ${this.colors}`);
        }
    }
    class AudiSUV extends Audi {
        constructor(model, year, colors, capacity) {
            super(model, year, colors);
            this.capacity = capacity;
        }
        display() {
            console.log(`\nModel: ${this.model}, Year: ${this.year}, Color: ${this.colors}, Capacity: ${this.capacity}`);
          }
        offRoad() {
            console.log(`${this.model} is capable of off-road driving.`);
          }
        }
    
    class AudiSedan extends Audi {
        constructor(model, year, colors, topspeed) {
            super(model, year, colors);
            this.topspeed = topspeed;
            }
        display() {
              console.log(`\nModel: ${this.model}, Year: ${this.year}, Color: ${this.colors}, Top speed: ${this.topspeed}`);
            }
        luxury() {
              console.log(`${this.model} provides a luxurious driving experience.\n`);
            }
        }

        const audiQ8 = new AudiSUV("Q8", 2022, "Black", "5 passengers");
        audiQ8.display();
        audiQ8.offRoad();

        const audiA6 = new AudiSedan("A6", 2023, "Silver", "250 Km/h");
        audiA6.display();
        audiA6.luxury(); 

// Creati un obiect dupa care destructurizatil. //
    const audiRS7 = {
    model: "RS7",
    year: 2023,
    colors: "Black",
    topspeed: "305 km/h"
  };
    const { model, year, colors, topspeed } = audiRS7;
  
    console.log("Model:", model);
    console.log("Year:", year);
    console.log("Color:", colors);
    console.log("TopSpeed:", topspeed);

// Creati o functia care face orice operatiruni dar sa folositi destructurizarea argumntului. //
    function performOperation({ operator, first_number, second_number }) {
        let result;
          switch (operator) {
          case '+':
            result = first_number + second_number;
            break;
          case '-':
            result = first_number - second_number;
            break;
          case '*':
            result = first_number * second_number;
            break;
          case '/':
            result = first_number / second_number;
            break;
          default:
            console.log("The operator entered is not valid.");
            return;
        }
          return result;
      }
        const additionResult = performOperation({ operator: '+', first_number: 25, second_number: 5 });
        const subtractionResult = performOperation({ operator: '-', first_number: 100, second_number: 99 });
        const multiplyResult = performOperation({ operator: '*', first_number: 5000, second_number: 0 });
        const divisionResult = performOperation({ operator: '/', first_number: 5000, second_number: 500 });
    
        console.log("\nThe result of the addition operation:", additionResult); 
        console.log("The result of the subtraction operation:", subtractionResult); 
        console.log("The result of the multiplication operation:", multiplyResult); 
        console.log("The result of the division operation:", divisionResult); 
//explicit types
let character: string;
let age: number;
let isLoggedIn: boolean;

character = 'Thor';
isLoggedIn = false;

//arrays
let heroes: string[] = [];

heroes.push('Hulk')

//union types
let ages: (string|number)[] = [];

ages.push(3);
ages.push("21");

let uid: string|number;
uid = '123';
uid = 123;

//objects
let heroOne: object;
heroOne = {name: 'Thor', age: 23043};

let heroTwo: {
  name: string,
  age: number,
  powers: string[]
};

heroTwo = {
  name: 'Iron Man',
  age: 43,
  powers: ['space suit', 'brains']
}
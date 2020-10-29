// let greet: Function;
// () => void


let greet: (a: string, b:string) => void;

//template strings ${}
greet = (name: string, greeting: string) => {
  console.log(`${name} says ${greeting}`);
}

let calc: (a: number, b: number, c:string) => number;

calc = (numOne: number, numTwo: number, action: string) => {
  if (action === 'add'){
    return numOne + numTwo;
  } else {
    return numOne - numTwo;
  }
}
//still returning a number

let logDetails: (obj: {name: string, age: number}) => void;

type person = {name: string, age: number}

logDetails = (hero: person) => { console.log(`${hero.name} is ${hero.age} years old`)
};
# Finance Logger
![Screen Shot 2020-10-30 at 9 30 21 AM](https://user-images.githubusercontent.com/59414750/97724479-93abf680-1a92-11eb-8662-f8a06f7f2e0a.png)


Similar to Venmo where it logs the finances owed but there are no bank accounts linked.

# TypeScript 101

- alternative to JS and allows us to use strict types

    - cannot change a string to a boolean

    - JS uses dynamic types where variables can change types leading to more errors

- supports modern features(arrow functions, let, const)

    - not all browsers can execute the new features but with TS, since it gets compiled down to JS, it allows older JS to understand

    - babel

- extra features(generics, interfaces, tuples); not in JS

- browsers by default do not understand TS so has to be compiled into JS to use

- run `npm install -g typescript` to install typescript globally

## Compile TS to JS
- to convert TS to JS, run `tsc sandbox.ts ` and it will convert the TS code into JS code and create a JS file

- `tsc sandbox.ts -w` will watch the file and automatically make changes to the JS file

- run `tsc --init` when files are organized

```
  "outDir": "./public",
  "rootDir": "./src",  

   "include":["src"]
```

- this is telling to look in src to compile JS files into the public; run `tsc`

- only compile things inside the src folder

## Type Basics
![Screen Shot 2020-10-29 at 1 51 22 PM](https://user-images.githubusercontent.com/59414750/97625243-debffe00-19ed-11eb-9c67-41d4702c8f4b.png)

- number type covers both integers and floats

- since `character` is a string, the red squiggles is an indicator that there's an error and you cannot change the variable to be a number

- TS infers what value based on what's assigned; don't need to explicitly declare as string

```
const circ = (diameter: number) => {
  return diameter * Math.PI;
};

console.log(circ(9));
```

- when you declare what the type should be, it will give you an error that a string cannot be used; otherwise, you will get NaN error

```
//sandbox.js

var circ = function (diameter) {
    return diameter * Math.PI;
};
```

- notice that nothing change with the function because it had to be compiled in TS before executing in JS, so if the diameter passed was a string, the math function would not execute

- TS allows type check leading to less errors

## Arrays and Objects

`let names = ['luigi', 'mario', 'yoshi'];`

- strings are declare in the array, so you can't add a number or boolean to this array and vice versa

`let mixed = ['ken', 4, 'life', 8, true];`

- as long as it's declared first, this array will take any string, numbers, or booleans

```
let ninja = {
  name: 'chai',
  belt: 'black',
  age: 14
};
```

- fix typing of attributes in objects where the attributes behave like variables and cannot be changed so always has to be a string

- once it has been defined, it cannot be changed and extra properties cannot be added to the object

- if you want to overide the object, it has to have all the objects in order to be created(similar to intialize in Ruby)

## Explicit Types
`let character: string;`

- creating a variable but only allow for the value to be a string

`let heroes: string[];`

- create a new array in the future but only strings are allow

- this does not set it as an empty array so you need to set it equal to [] in order to be able to push into it

```
let heroes: string[] = [];

heroes.push('Hulk')
```

- union types can be used for mixed arrays using `|` to declare several types it can be

```
let ages: (string|number)[] = [];

ages.push(3);
ages.push("21");
```

- declaring properties with objects

```
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
```

## Dynamic(any) Types
```
let age: any = 25;

age = true;
```

- the type is any and not a number so age can be changed

- reverts TS back to JS so we don't get errors or hints on what types it should be

## Function Basics
```
let greet: Function;

greet = () => {
  console.log('hello');
}
```

- with the code below, if the third argument is not passed, then it will return the default value 10 and if a third argument is passed through, then that will override the default

- `c?: number` is optional, not required

```
const add = (a: number, b: number, c: number|string = 10) => {
console.log(a + b);
console.log(c);
}

add(5,10, 20);
```

- with a colo after the function, it's the result has to be a number even though TS already made the inference

- return of `:void` is not the same as undefined but the complete lack of value

```
const minus = (a: number, b: number): number => {return a + b;}
```

## Aliases - Reduce Code Deplication
```
type StringOrNum = string | number;
type objWithName = { name: string, uid: StringOrNum};

const logDetails = (uid: StringOrNum, item: string) => {
  console.log(`${item} has a uid of ${uid}`);
}

const greet = (user: objWithName) => {
  console.log(`${user.name} says hello`);
}
```

## Function Signatures
- describes the general structure of a function

`() => void` this function takes no arguments and returns a void

- in the example below, TS infers that it will be returning a void despite a change in argument variables from a to name

- the signature has to match so you can't change it to a number in the new function

```
let greet: (a: string, b:string) => void;

//template strings ${}
greet = (name: string, greeting: string) => {
  console.log(`${name} says ${greeting}`);
}
```

- for this function, it requires that the return result is a number so if the result doesn't follow evaluate as truthy first, create conditionals to suit the requirements

```
let calc: (a: number, b: number, c:string) => number;

calc = (numOne: number, numTwo: number, action: string) => {
  if (action === 'add'){
    return numOne + numTwo;
  } else {
    return numOne - numTwo;
  }
}
```

## The DOM and Type Casting
`const form = document.querySelector('form')!;`

- the `!` just allows to say that we know it's an HTML element

- `const form = document.querySelector('.new-item-form')!;` when we pass a class instead of an id tag, it doesn't know that it's a form but it's some sort of element

- typecasting will declare what type it is so it will store it as as HTMLFormElement and we can use all the methods associated with it

`const form = document.querySelector('.new-item-form') as HTMLFormElement;`

## Class
```
class Invoice {
  client: string;
  details: string;
  amount: number;

  constructor(c: string, d: string, a: number) {
    this.client = c;
    this.details = d;
    this.amount = a;
  }
}
```

- the constructor will take the values sent in and assign it to the properties to intialize the class

- `let invoices: Invoice[] = [];` only instances of the class Invoice can be added to the array

# Public, Private, Readonly
```
readonly client: string;
private details: string;
public amount: number;
```

- by adding `private` you don't have access to it outside of the class in the console but you can still access within the class

- `readonly` can't change it but you have access to it

- default is public with both read and write abilities

```
  constructor(
    readonly client: string,
    private details: string,
    public amount: number,
  ){}
```

- don't need to assing these variables at the top

## Modules (using ES6)
- when importing a file, use js because js is the file that browsers interact with

- making multiple requests; could use webpack

## Interfaces
- not used to create new object

- if there's a variable in the future called person, then it has to have these attributes in order to be created

- this class must follow this format interface, if format method not present in Invoice class, there would be an error

## Rendering HTML Template
1. Register a list container(ul) in the constructor

2. Create a render method to render a new `li` to the container
    - accepts arguments: invoid/payment, heading, position

    - create HTML template(li, h4, p)
    
    - add the `li` template to the start/end of the list

- the item can be a payment or ivoice so the interface HasFormatter allows for either object to be passed

- prepend(start) or append(end)
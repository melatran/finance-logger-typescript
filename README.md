# Finance Logger

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



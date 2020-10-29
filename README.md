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

## Arrays




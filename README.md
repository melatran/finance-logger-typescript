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

- to convert TS to JS, run `tsc sandbox.ts ` and it will convert the TS code into JS code and create a JS file

- `tsc sandbox.ts -w` will watch the file and automatically make changes to the JS file

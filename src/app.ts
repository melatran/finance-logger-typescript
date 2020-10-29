import {Invoice} from './classes/invoice.js'

// interfaces
export interface IsPerson {
  name: string;
  age?: number;
  speak(a: string): void;
  spend(a: number): number;
}

const me: IsPerson = {
  name: 'shaun',
  //age: 30,
  speak(text: string): void {
    console.log(text);
  },
  spend(amount: number): number {
    console.log('I spent ', amount);
    return amount;
  },
};

console.log(me);
me.speak('hello, world');

const greetPerson = (person: IsPerson): void => {
  console.log('hello ', person.name);
}

const invOne = new Invoice('MoMo', 'life', 3034);
const invTwo = new Invoice('Emma', 'Food', 5000);

let invoices: Invoice[] = [];
invoices.push(invOne)

const form = document.querySelector('.new-item-form') as HTMLFormElement;

//inputs
const type = document.querySelector('#type') as HTMLSelectElement; //select field

const tofrom = document.querySelector('#tofrom') as HTMLInputElement; //input field

const details = document.querySelector('#details') as HTMLInputElement; //input field

const amount = document.querySelector('#amount') as HTMLInputElement; //input field

form.addEventListener('submit', (e: Event) => {
  e.preventDefault();

  console.log(
    type.value,
    tofrom.value,
    details.value,
    amount.valueAsNumber
  )
});
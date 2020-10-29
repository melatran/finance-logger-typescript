import {Invoice} from './classes/invoice.js';
import {Payment} from './classes/payments.js';
import {HasFormatter} from './interfaces/hasFormatter.js'

// let docOne: HasFormatter;
// let docTwo: HasFormatter;

// docOne = new Invoice('MoMo', 'life', 250);
// docTwo = new Payment('Melanie', 'being bad', 2432);

// const invOne = new Invoice('MoMo', 'life', 3034);
// const invTwo = new Invoice('Emma', 'Food', 5000);

// let docs: HasFormatter[] = [];
// docs.push(docOne);
// docs.push(docTwo);

const form = document.querySelector('.new-item-form') as HTMLFormElement;

//inputs
const type = document.querySelector('#type') as HTMLSelectElement; //select field

const tofrom = document.querySelector('#tofrom') as HTMLInputElement; //input field

const details = document.querySelector('#details') as HTMLInputElement; //input field

const amount = document.querySelector('#amount') as HTMLInputElement; //input field

form.addEventListener('submit', (e: Event) => {
  e.preventDefault();

  let doc: HasFormatter;
  if (type.value === 'invoice'){
    doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber)
  } else {
    doc = new Payment(tofrom.value, details.value, amount.valueAsNumber)
  };
  console.log(doc)
});
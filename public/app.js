import { Invoice } from './classes/invoice.js';
import { Payment } from './classes/payments.js';
// let docOne: HasFormatter;
// let docTwo: HasFormatter;
// docOne = new Invoice('MoMo', 'life', 250);
// docTwo = new Payment('Melanie', 'being bad', 2432);
// const invOne = new Invoice('MoMo', 'life', 3034);
// const invTwo = new Invoice('Emma', 'Food', 5000);
// let docs: HasFormatter[] = [];
// docs.push(docOne);
// docs.push(docTwo);
const form = document.querySelector('.new-item-form');
//inputs
const type = document.querySelector('#type'); //select field
const tofrom = document.querySelector('#tofrom'); //input field
const details = document.querySelector('#details'); //input field
const amount = document.querySelector('#amount'); //input field
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    ;
    console.log(doc);
});

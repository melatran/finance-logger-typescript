import { Invoice } from './classes/invoice.js';
const invOne = new Invoice('MoMo', 'life', 3034);
const invTwo = new Invoice('Emma', 'Food', 5000);
let invoices = [];
invoices.push(invOne);
const form = document.querySelector('.new-item-form');
//inputs
const type = document.querySelector('#type'); //select field
const tofrom = document.querySelector('#tofrom'); //input field
const details = document.querySelector('#details'); //input field
const amount = document.querySelector('#amount'); //input field
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});

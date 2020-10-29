//classes
class Invoice {
  client: string;
  details: string;
  amount: number;

  constructor(c: string, d: string, a: number) {
    this.client = c;
    this.details = d;
    this.amount = a;
  }

  format() {
    return `${this.client} owes ${this.amount} for ${this.details}`
  }
}

const invOne = new Invoice('MoMo', 'life', 3034);
const invTwo = new Invoice('Emma', 'Food', 5000);

let invoices: Invoice[] = [];
invoices.push(invOne)
invOne.client = "Appa"

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
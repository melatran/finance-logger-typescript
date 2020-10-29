"use strict";
//classes
var Invoice = /** @class */ (function () {
    function Invoice(c, d, a) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    Invoice.prototype.format = function () {
        return this.client + " owes " + this.amount + " for " + this.details;
    };
    return Invoice;
}());
var invOne = new Invoice('MoMo', 'life', 3034);
var invTwo = new Invoice('Emma', 'Food', 5000);
var invoices = [];
invoices.push(invOne);
invOne.client = "Appa";
var form = document.querySelector('.new-item-form');
//inputs
var type = document.querySelector('#type'); //select field
var tofrom = document.querySelector('#tofrom'); //input field
var details = document.querySelector('#details'); //input field
var amount = document.querySelector('#amount'); //input field
form.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});

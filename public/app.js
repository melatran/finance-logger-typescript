"use strict";
// const anchor = document.querySelector('a')!;
// // if(anchor){
// //   console.log(anchor.href);
// // }
// console.log(anchor.href);
// const form = document.querySelector('form')!;
var form = document.querySelector('.new-item-form');
// console.log(form.children);
//inputs
var type = document.querySelector('#type'); //select field
var tofrom = document.querySelector('#tofrom'); //input field
var details = document.querySelector('#details'); //input field
var amount = document.querySelector('#amount'); //input field
form.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});

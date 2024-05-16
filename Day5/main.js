
import webTechs from "./webTechs.js";

// Level 1

let firstArray = Array();
console.log(firstArray);
let secondArray = [1, 2, 3, 'lady', true, null]
console.log(secondArray);
console.log(secondArray.length);
let firstItem = secondArray[0]
let middleItem = secondArray[3]
let lastItem = secondArray.length -1;
lastItem = secondArray[lastItem]
console.log(firstItem, middleItem, lastItem);

let mixedDataTypes = ['tobi', 4, 'Lord', true, 5, 7, 3]
console.log(mixedDataTypes.length);

let itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']
console.log(itCompanies);
console.log(itCompanies.length);
let firstCompany = itCompanies[0]
let middleCompany = itCompanies[3]
let lastCompany = itCompanies.length -1;
lastCompany = itCompanies[lastCompany]
console.log(firstCompany, middleCompany, lastCompany);
console.log(itCompanies[0]);
console.log(itCompanies[1]);
console.log(itCompanies[2]);
console.log(itCompanies[3]);
console.log(itCompanies[4]);
console.log(itCompanies[5]);
console.log(itCompanies[6]);
console.log(itCompanies[0].toUpperCase());
console.log(itCompanies[1].toUpperCase());
console.log(itCompanies[2].toUpperCase());
console.log(itCompanies[3].toUpperCase());
console.log(itCompanies[4].toUpperCase());
console.log(itCompanies[5].toUpperCase());
console.log(itCompanies[6].toUpperCase());
console.log(itCompanies.join());

let check = itCompanies.includes('Amazon');
check
? console.log(itCompanies[6])
: console.log('A company is not found');

// let moreThan = itCompanies.filter
console.log(itCompanies.sort());
console.log(itCompanies.reverse());
console.log(itCompanies.slice(0, 3));
console.log(itCompanies.slice(4, 7));
console.log(itCompanies.slice(3, 4));

itCompanies.shift()
console.log(itCompanies);

itCompanies.splice(3, 1)
console.log(itCompanies);

itCompanies.pop()
console.log(itCompanies);

console.log(itCompanies.splice());

// Level 2

let text =
'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.';
let res = /[,.]/gi
console.log(text.replace(res));
console.log(text.split());
console.log(text.length);

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];
shoppingCart.unshift('Meat');
console.log(shoppingCart);
shoppingCart.push('Sugar');
console.log(shoppingCart);
shoppingCart.splice(4, 1);
console.log(shoppingCart);

shoppingCart[3] = 'Green Tea';
console.log(shoppingCart);

// Accessing countries.js in median.js

import { countries } from "./countries.js";
let cot = countries.includes('Ethiopia');
console.log(cot);

// Accessing webTechs.js in median.js
let sas = webTechs.includes('Sass')
console.log(sas);
webTechs.unshift('Sass');
console.log(webTechs);

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux'];
const backEnd = ['Node','Express', 'MongoDB'];
const fullStack = frontEnd.concat(backEnd);
console.log(fullStack);

// Level 3
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
console.log(ages.sort());
console.log(Math.max(...ages));
console.log(Math.min(...ages));

// Median
console.log((ages[4] + ages[5]) / 2);
// average
let median = (ages[0] + ages[1] + ages[2] + ages[3] + ages[4] + ages[5] + ages[6] + ages[7] + ages[8] + ages[9]) / ages.length;
console.log(Math.floor(median));
// range
console.log(Math.max(...ages) - Math.min(...ages));

countries.slice(0, 11);
console.log(countries);
console.log(countries[5]);

countries.unshift('U.S.A');
console.log(countries);

 let num = countries.slice(0, 6);
console.log(num);

let nub = countries.slice(6, 12);
console.log(nub);
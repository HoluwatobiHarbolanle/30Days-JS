const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'Iceland']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
    { product: 'banana', price: 3},
    { product: 'mango', price: 6},
    { product: 'potato', price: ' '},
    { product: 'avocado', price: 8},
    { product: 'cofee', price: 10},
    { product: 'tea', price: ''},
]
// Level 1
// Question 1
// forEach is a method which iterates through a array element and works on each value.
// map is a method which copies the original function and modifies it without touching the original.
// filter is a method which filters out all the values that passes the condition given.
// reduce
// They take a callback function.

// // Question 2
// A callback function can be passed as a parameter to other function to take another function.

// Question 3
countries.forEach((elem) => console.log(elem));

// Question 4
names.forEach((elem) => console.log(elem));

// Question 5
numbers.forEach((num) => console.log(num));

// Question 6
countries.map((elem) => console.log(elem.toUpperCase()));

// Question 7
countries.map((elem) => console.log(elem.length));

// Question 8
numbers.map((num) => console.log(num * num));

// Question 9
names.map((name) => console.log(name.toUpperCase()));

// Question 10
products.map((prod) => console.log(prod));

// Question 11
const filterCountries = countries.filter((elem) => elem.includes('land'));
console.log(filterCountries);

// Question 12
const filteredCountry = countries.filter((elem) => elem.length == 6);
console.log(filteredCountry);

// Question 13
const filter = countries.filter((elem) => elem.length >= 6);
console.log(filter);

// Question 14
const filterStart = countries.filter((elem) => elem.startsWith('E'));
console.log(filterStart);

// Question 15
// const price =
// products.map(function (product) {
//     return product.price
// }) 
// let newProducts = products.map(function(product));
// console.log(price);
// console.log(price);
// const filt = products.filter((prod)=> prod.price.valueOf(price));
// console.log(filt);

// Question 16
// function getStringLists(anArr) {
//     for (let i = 0; i < Arr.length) {
//         let check = Arr[i].
//     }
//     return check.()
// }

// Question 17
const reduce = numbers.reduce((acc, cur) => acc + cur, 0);
console.log(reduce);

// Question 18
const count = countries.reduce((acc, cur) => acc + ',' + cur + 'are north European countries',);
console.log(count);

// Question 19
// some method means if some of the values of the array called passes the condition while every refers to all of the values.

// Question 20
console.log(names.some((el) => el.length > 7));

// Question 21
console.log(countries.every((elem) => elem.includes('land')));

// Question 22
// The difference between find and findIndex is that find returns the  first value which passes the condition while fndIndex returns the index of the first value which passes the condition too.

// Question 23
console.log(countries.find((elem) => elem.length == 6));

// Question 24
console.log(countries.findIndex((elem) => elem.length == 6));

// Question 25
console.log(countries.findIndex((elem) => elem.startsWith('N')));

// Question 26
console.log(countries.findIndex((elem) => elem.includes('Russia')));

// Level 2
// Question 1
// products.map((prod) => prod.filter((prod) => prod.));
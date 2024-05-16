// Level 1

let firstName = "Holuwatobi"; 
let lastName = "Bola"; 
let country = "Nigeria" 
let city = "Ilorin" 
let age = 16;
let isMarried 
let year = 2024;
console.log(typeof firstName);
console.log(typeof lastName);
console.log(typeof country);
console.log(typeof city);
console.log(typeof age);
console.log(typeof isMarried);
console.log(typeof year);
console.log('10' === 10);
console.log(parseInt('9.8') == 10);

console.log(4 > 3 == 10 > 5);
console.log(0  == false);
console.log(1 !== false);

console.log(4 > 3 && 3>5);
console.log(5 < 2 || 4 < 2);
console.log(5 == 3);

console.log(4 > 3);
console.log(4 >= 3);
console.log(4 < 3);
console.log(4 <= 3);
console.log(4 == 4);
console.log(4 === 4);
console.log(4 != 4);
console.log(4 !== 4);
console.log(4 != '4');
console.log(4 == '4');
console.log(4 === '4');

let a = "python";
let en = a.length;
let b = "jargon";
let gt = b.length;
console.log(en !== gt);
// console.log(b.length);
console.log(4 > 3 && 10 < 12);
console.log(4 > 3 && 10 > 12);
console.log(4 > 3 || 10 < 12);
console.log(4 > 3 || 10 > 12);
console.log(!(4 > 3));
console.log(!(4 < 3));
console.log(!(false));
console.log(!(4 > 3 && 10 < 12));
console.log(!(4 > 3 && 10 > 12));
console.log(!(4 === '4'));

let dr = "dragon";
let py = "python";
console.log(dr.includes("on"));
console.log(py.includes("on"));

const me = new Date();
console.log(me.getFullYear());

const mem = new Date();
console.log(mem.getMonth() + 1);

const mel = new Date();
console.log(mel.getDate());

const men = new Date();
console.log(men.getDay());

const meh = new Date();
console.log(meh.getHours());

const mew = new Date();
console.log(mew.getMinutes());

const mej = new Date();
console.log(mej.getTime());

// Level 3
// let base = prompt('Enter base of the triangle: 20');
// let height = prompt('Enter the height of the triangle: 10');
// let area = 0.5 * base *  height;
// console.log(area);

// let sidea = prompt('Enter sidea: 5');
// let sideb = prompt('Enter sideb: 4')
// let sidec = prompt('Enter sidec: 3')
// let per = +sidea + +sideb + +sidec;
// console.log(per);

// let length = prompt('Enter length');
// let width = prompt('Enter width');
// let are = length * width;
// console.log(are);
// let peri = +length + +width;
// console.log(peri);

// let radius = prompt('Enter radius');
// let pi = Math.PI;
// console.log(Math.PI * `${radius}` * `${radius}`);

// // question 5, 6, 7,8 undone

// let user = prompt('Enter hours: 40');
// let usern = prompt('Enter rate per hour: 28');
// let weeklyEarning = user * usern;
// console.log(weeklyEarning);

// let name = prompt('Enter name');
//  if (name.length > 7) {
//     alert(`Your name is long`)
//  } else {
//     alert(`Your name is short`)
//  }

//  let FirstName = prompt("Enter your firstName");
//  let familyName = prompt("Enter your family name");
//  if (FirstName.length > familyName.length || FirstName.length == familyName.length) {
//     alert(`Your first name, ${FirstName} is longer than your family name, ${familyName}`)
//  } else {
//    alert(`Your family name, ${familyName} is longer than your first name, ${FirstName}`)
// } 

let myAge = 12;
let yourAge = 24;
let ans = myAge - yourAge;
console.log(`I am ${ans} years older than you.`);

let birth = prompt('Enter birth year');
let ile = 2024 - birth;

if (ile >= 18) {
   alert(`You are ${ile}. You are old enough to drive.`)
} else {
   let age = 18 - ile;
   alert(`You are ${ile}. You will be allowed to drive after ${age} years`)
}

let years = prompt("Enter number of years you live:")
const Year = new Date();
const man = (Year.getMilliseconds(years));

alert(`You lived ${man} seconds.`)

// YYYY-MM-DD HH:mm

const timeOne = new Date();
const yeaR = timeOne.getFullYear();
const month = timeOne.getMonth() + 1;
const day = timeOne.getDate();
const hourS = timeOne.getHours();
const min = timeOne.getMinutes();
console.log(`${yeaR}-${month}-${day}-${hourS}:${min}`);


// DD-MM-YYYY HH:mm

const timeTwo = new Date();
const date = timeTwo.getDate();
const Month = timeTwo.getMonth() + 1;
const YeaR = timeTwo.getFullYear();
const Hour = timeTwo.getHours();
const mins = timeTwo.getMinutes();
console.log(`${date}-${Month}-${YeaR}-${Hour}:${mins}`);

// DD/MM/YYYY HH:mm

const timeThree = new Date();
const datE = timeThree.getDate();
const montH = timeThree.getMonth() + 1;
const fullyear = timeThree.getFullYear();
const Hours = timeThree.getHours();
const Mins = timeThree.getMinutes();
console.log(`${datE}/${montH}/${fullyear}/${Hours}:${Mins}`);

// Level 3

// YYY-MM-DD HH:mm
const now = new Date();
const yyy = now.getFullYear();
const MM = now.getMonth();
const dd = now.getDate();
const hh = now.getHours();
const mm = now.getMinutes();
console.log(`${yyy}-${MM}-${dd}-${hh}:${mm}`);
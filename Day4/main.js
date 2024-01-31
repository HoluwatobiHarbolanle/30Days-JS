// Level 1

let userInput = prompt('Enter your age:');
if (userInput >= 18) {
    alert('You are old enough to drive');
} else {
    let calc = 18 - userInput;
    alert(`You are left with ${calc} years to drive.`);
}

let myAge = 16;
let yourAge = prompt('Enter your age:')
if (myAge > yourAge) {
    console.log('I am older than you');
} else {
    let not = yourAge - myAge;
    console.log(`You are ${not} years older than me.`);
}
//  using if else
let a = 4;
let b = 3;
if (a > b) {
    console.log(`${a} is greater than ${b}`);
} else {
    console.log(`${a} is less than ${b}`);
}
// using ternary operator
let ai = 5;
let bi = 3;
let ab = ai > bi;
ab
 ? console.log(`${ai} is greater than ${bi}`)
 : console.log(`${ai} is less than ${bi}`);

 let evnOrOdd = prompt('Enter a number:');
 if (evnOrOdd % 2 === 0) {
    alert(`${evnOrOdd} is an even number.`)
 } else {
    alert(`${evnOrOdd} is an odd number.`)
 }

//  Level 2
let scores = prompt('Enter your score:');
if (scores >=80 && scores<=100) {
        alert(`Grade A`)
} else if (scores >=70 && scores<=89) {
        alert('Grade B')
} else if (scores >=60 && scores<=69) {
        alert('Grade C')
} else if(scores >=50 && scores<=59) {
        alert('Grade D')
} else if(scores >=0 && scores<=49) {
        alert('Grade F')
} else {
        alert(`You have no grades`)
}


let season = prompt('Enter month:');
let month = season.toUpperCase();
if (month === 'SEPTEMBER' || month === 'OCTOBER' || month ==='NOVEMBER') {
    console.log('The season is Autumn');
} else if (month === 'DECEMBER' || month === 'JANUARY' || month === 'FEBRUARY') {
    console.log('The season is Winter');
} else if (month === 'MARCH' || month === 'APRIL' || month ==='MAY'){
    console.log('The season is Spring');
} else if (month === 'JUNE' || month === 'JULY' || month === 'AUGUST') {
    console.log('The season is Summer');
} else {
    console.log(`${season} is not a month`);
}

let today = prompt('What day is it today?');
let day = today.toLowerCase();
switch (day) {
    case 'monday':
        console.log(`Today is a working day.`);
        break;
    case 'tuesday':
        console.log(`Today is a working day.`);
        break;
    case 'wednesday':
        console.log(`Today is a working day.`);
        break;
    case 'thursday':
        console.log(`Today is a working day`);
        break;
    case 'friday':
        console.log(`Today is a working day.`);
        break;
    case 'saturday':
        console.log(`Today is a weekend day.`);
        break;
    case 'sunday':
        console.log(`Today is a weekend day.`);
    default:
        console.log(`${today} is not a day`);
}

 // Level 3

 let mnt = prompt('Enter month:');
 let mnth = mnt.toUpperCase();
 switch (mnth) {
    case 'JANUARY':
        console.log('January has 31 days.');
        break;
    case 'FEBRUARY':
        console.log('February has 28 days.');
        break;
    case 'MARCH':
        console.log('March has 31 days.');
        break;
    case 'APRIL':
        console.log('April has 30 days.');
        break;
    case 'MAY':
        console.log('May has 31 days.');
    case 'JUNE':
        console.log('June has 30 days.');
        break;
    case 'JULY':
        console.log('July has 31 days.');
        break;
    case 'AUGUST':
        console.log('August has 31 days.');
        break;
    case 'SEPTEMBER':
        console.log('September has 30 days.');
        break;
    case 'OCTOBER':
        console.log('October has 31 days.');
        break;
    case 'NOVEMBER':
        console.log('November has 31 days.');
        break;
    case 'DECEMBER':
        console.log('December has 31 days.');
        break;
    default:
        console.log(`${mnt} is not a month.`);
 }

// leap year

let moon = prompt('Enter month:');
let mon = moon.toLowerCase();
switch (mon) {
    case 'january':
        console.log('January has 31 days.');
        break;
    case 'february':
        console.log('February has 29 days.');
        break;
    case 'march':
        console.log('March has 31 days.');
        break;
    case 'april':
        console.log('April has 30 days.');
        break;
    case 'june':
        console.log('June has 30 days.');
        break;
    case 'july':
        console.log('July has 31 days.');
        break;
    case 'august':
        console.log('August has 31 days.');
        break;
    case 'september':
        console.log('September has 30 days.');
        break;
    case 'october':
        console.log('October has 31 days.');
    case 'november':
        console.log('October has 31 days.');
        break;
    case 'december':
        console.log('December has 31 days.');
        break;
    default:
        console.log(`${moon} is not a month.`);
        break;
}
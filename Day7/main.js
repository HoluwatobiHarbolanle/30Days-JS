// Level 1
// Question 1
function fullName(params) {
    console.log("Bolanle Oluwatobi");
}
fullName();

// Question 2
function wholeName(firstName, lastName) {
    console.log(`${firstName} ${lastName}`);
} wholeName('Oluwatobi', 'Abigail');

// Question 3
function addNumbers(a, b) {
    return a + b
}
console.log(addNumbers(2, 3));

// Question 4
function areaOfRectangle(length, width) {
    let area = length * width;
    return area
} console.log(areaOfRectangle(10, 5));

// Question 5
function perimeterOfRectangle(length, width) {
    let perimeter = 2 * (length + width);
    return perimeter
} console.log(perimeterOfRectangle(8, 4));

// Question 6
function volumeOfRectPrism(length, width, height) {
    return `${length * width * height}`
    
} console.log(volumeOfRectPrism(6, 3, 5));

// Question 7
function areaOfCircle(r) {
    let area = Math.PI * r * r;
    return area
} console.log(areaOfCircle(6));

// Question 8
function circumOfCircle(r) {
    let circumference = 2 * Math.PI * r
    return circumference
} console.log(circumOfCircle(7));

// Question 9
function density(mass, volume) {
    return mass / volume
} console.log(density(30, 5));

// Question 10
function speed(distance, time) {
    return distance / time
} console.log(speed(100, 4));

// Question 11
function weight(mass, gravity) {
    return mass * gravity
} console.log(weight(25, 10));

// Question 12
function convertCelsiusToFarenheit(oC) {
    let oF = (oC * (9 / 5)) + 32
    return oF 
} console.log(convertCelsiusToFarenheit(50));

// Question 13
function BMI(w, h) {
    let bmiValue = w / (h * h);
    if (bmiValue < 18.5) {
        return "Underweight"
    } else if (bmiValue < 25) {
        return "Normalweight"
    } else if (bmiValue < 30) {
        return "Overweight"
    } else {
        return "Obese"
    }
    return bmiValue
} console.log(BMI(2000, 10));

// Question 14
function checkSeason(month) {
    let season = month.toUpperCase()
    if (season === 'SEPTEMBER' || season === 'OCTOBER' || season ==='NOVEMBER') {
        return'Autumn'
    } else if (season === 'DECEMBER' || season === 'JANUARY' || season === 'FEBRUARY') {
        return 'Winter'
    } else if (season === 'MARCH' || season === 'APRIL' || season ==='MAY'){
        return 'Spring'
    } else if (season === 'JUNE' ||season === 'JULY' || season === 'AUGUST') {
        return 'Summer'
    } else {
        return 'nil'
    }
    
} console.log(checkSeason('march'));

// Question 15
function findMax(a, b, c) {
    let max = ""
    for (let i = 0; i >= 3; i++) {

    }

} console.log(findMax(0, 10, 5));

// Level 2
// Question 1
function solveLinEquation(a, x, b, y, c) {
    let linEquation = ((a * x) + (b * y) + c)
    return linEquation
} console.log(solveLinEquation(5, 3, 6, 7, 2));

// Question 2
function solveQuadEquation(a, x, b, c) {
    let quadEquation = (a * x * 2) +(b * x) + c
    return quadEquation
}
 console.log(solveQuadEquation(3, 2, 4, 3));

// Question 3
function printArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i];
    }
    return arr;
}
const number = [1, 2, 3, 'lot']
console.log(printArray(number));

// Question 4
function showDateTime() {
    const now = new Date();
    const date = now.getDate();
    const month = now.getMonth();
    const year = now.getFullYear();
    const hour = now.getHours();
    const min = now.getMinutes();
    return `${date}/${month}/${year} ${hour}:${min}`
} console.log(showDateTime());

// Question 5
function swapValues(x, y) {
    return `x = ${y}, y = ${x}`
} console.log(swapValues(3, 4));

// Question 6
let itemArray =  [];
let item = ['rice', 'biscuit', 'ice-cream', 'bobo']
function reverseArray(arr) {
    for (let i = item.length-1; i >= 0; i--) {
        itemArray.push(item[i])
    }
    return itemArray
} console.log(reverseArray(item));

// Question 7
const capital = ['yoghurt', 'biscuit', 'sugar'];
function capitalizeArray(cases) {
    for(let i = 0; i < capital.length; i++) {
        cases[i] = capital[i].toUpperCase()
    } return cases
    }console.log(capitalizeArray(capital));
// Question 8
const dArr = []
function addItem(items) {
    dArr.push(items);
    return dArr
}
console.log(addItem('box'));

// Question 9
const nArr = ['box', 'net']
function removeItem(index) {
    nArr.pop(index);
    return nArr
} console.log(removeItem());

// Question 10
function sumOfNumbers() {
    let sum = 0;
    for (let i = 0; i <= 100; i++ ) {
        sum += i
    }
    return sum
} 
console.log(sumOfNumbers());

// Question 11
function sumOfOdds(params) {
    let odd = 0;
    for (let i = 0; i <= 100; i++) {
        if (i % 2 === 0) {
            continue
        } odd += i
    } return odd
} console.log(sumOfOdds());
// Question 12
function sumOfEven(params) {
    let even = 0;
for (let o = 0; o <= 100; o++) {
    if (o%2 === 1){
        continue
    }
    even += o
} return even
}console.log(sumOfEven());

// Question 13
function evensAndOdds(Num) {
    let evensCount = 0;
    let oddsCount = 0;
    for (let i = 0; i <= Num; i++) {
        if (i%2 == 0) {
            evensCount++
        } else {
            oddsCount++
        }
    } 
    return `The number of odds are ${oddsCount}.\nThe number of evens are ${evensCount}.`
    } console.log(evensAndOdds(100));

// Question 14
    const sum = (...args) => {
        let sum = 0;
        for (const i of args) {
            sum += i;
        }
        return sum
    } 
    console.log(sum(1, 3, 5, 7));
    console.log(sum(10, 20, 13, 40, 10));

// Question 15
function randomUserIp() {
    const ip = () => Math.floor(Math.random() * 256)
    const randIp = Array.from({length: 4}, ip);
    return randIp.join('.')
} const randoIp = randomUserIp()
console.log(randoIp);

// Question 17
 function randomHexaNumberGenerator() {
    const hexDigits = '0123456789ABCDEF';
    let hexNumber = '#';
    for (let i = 0; i < 6; i++) {
       const rand = Math.floor(Math.random() * hexDigits.length)
        hexNumber += hexDigits[rand];
    }
    return hexNumber;
 }
const randomHex = randomHexaNumberGenerator();
console.log(randomHex);

// Question 18
// function userIdGenerator() {
//     const space = "";
//     const char = "abcdefg0123456789";
//     for (let i = 0; i < 7; i++) {
//         let randGen = Math.floor(Math.random() * char.length)
//         space += char[randGen]
//     } 
//     return space
// }
// const userId = userIdGenerator()
// console.log(userId);

// Level 3
// Question 2
const rgbColorGenerator = () => {
    let color = 'rgb'
    const rgb1 = Math.floor(Math.random() * 256);
    const rgb2 = Math.floor(Math.random() * 256);
    const rgb3 = Math.floor(Math.random() * 256);
    color +=  (`(${rgb1},${rgb2},${rgb3})`)
    return color
}
const final = rgbColorGenerator()
console.log(final);

// Question 3
const newArray = []
function arrayOfHexaColors() {
    return [
        '#FF0000',
        '#00FF00',
        '#OOFFFF'
    ];
} console.log(arrayOfHexaColors());
 
// Question 4
function arrayOfRgbColors () {
    return [
        {r: 255, g: 0, b: 0},
        {r: 255, g: 255, b: 0},
        {r: 0, g: 255, b: 0}
    ];
} console.log(arrayOfRgbColors());

// Question 5

// function convertHexaToRgb(hex) {
//     return new Color(parseInt(hex, 16), parseInt(hex, 16), parent(hex,16));
// } console.log(convertHexaToRgb('#FFFF00'));

// Question 6


// Question 7

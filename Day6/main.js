// Level 1
// Question 1
// for loop
for (let i=0; i<=10; i++) {
    console.log(i);
}
// while loop
let i=0;
while (i<=10) {
    console.log(i);
    i++
}
// do while loop
let j=0
do {
    console.log(j)
    j++
} while(j <= 10) 

// Question 2
// for
for (let i = 10; i >= 0; i--) {
    console.log(i);
}
// while
let y = 10;
while (y >= 0) {
     console.log(y);
     y--;
}

// do while
let u=10
do {
    console.log(u);
    u--
} while (u >= 0) {
} 

// Question 3
for (let i = 0; i <= 7; i++) {
    console.log(i);
}
// Question 4
let line = "";
for (let n = 0; n <=7; n++) {
    line += "#";
    console.log(line);
}
// Question 5
for (i = 0; i<=10; i++) {
    console.log(`${i} * ${i} = ${i * i}`);
}
// Question 6
for(i = 0; i<=10; i++) {
    console.log(`${i}   ${i ** 2}   ${i ** 3}`);
}
// Question 8
for (let o = 0; o <= 100; o++) {
    if (o%2 == 1){
        continue
    }
    console.log(o);
}
// Question 7
for (let g=0; g<=100; g++) {
    if (g%2 == 0) {
        continue
    }
    console.log(g);
}
// for (k=0; k<=100; k++) {
//     if (Math. === k) {
//         continue
//     }
//     console.log(k);
// }

// Question10
let sum = 0;
for(p=0; p<=100; p++) {
    sum += p
}
console.log(`The sum of all numbers from 0 to 100 is ${sum}.`);

// Question 12
let sums = 0;
for(let pi = 0; pi <= 100; pi++) {
    if (pi%2 == 1) {
        continue
    }
    sums += pi
}
let sm = 0;
for (e=0; e<=100; e++) {
    if (e%2 == 0) {
        continue
    }
    sm += e
}
console.log(`The sum of all evens from 0 to 100 is ${sm}. And the sum of all odds from 0 to 100 is ${sums}.`);
console.log([sm, sums]);

// Question 13
const arr =[]
let reg = Math.floor(Math.random());
for (let d = 1; d <= 5; d++) {
    reg += d;
    arr.push(reg);
}
console.log(arr);
// Question 14
const newArr = []
for (let i = 0; newArr.length < 5; i++) {
    let random = Math.floor(Math.random() * 10);
    if (!newArr.includes(random)) {
    newArr.push(random)
    }
}
console.log(newArr);
// Question 15
// let rand = new Set();
let char = "abcdefghijklmnopqrstuvwxyz0123456789";
newRand = ""
for (let i = 0; i < 5; i++) {
    let randIndex = Math.floor(Math.random() * char.length)
    newRand += char[randIndex]
}
console.log(newRand);

// function generateRandomString() {
//     let randomString = "";
//     for (let i = 0; i < 5; i++) {
//         randomString += (Math.random()).charAt(i);
//     }
//     return randomString;
// }

// Level 2
// Question 1
let string = "";
for (let i = 0; i < 7; i++) {
    const charList = "abcdefghijklmnopqrstuvwxyz0123456789"
    let ranNumber = Math.floor(Math.random() * charList.length)
    string += charList[ranNumber]
}
console.log(string);
// Question 2
let hex = "#";
for (let i = 0; i < 6; i++) {
    const hexValue = "abcdef012345679";
    let rand = Math.floor(Math.random() * hexValue.length);
    hex += hexValue[rand]
} console.log(hex);
// Question 3
let rgb = 'rgb';
    const randRgb = Math.floor(Math.random() * 255)
    const randRgb2 = Math.floor(Math.random() * 255)
    const randRgb3 = Math.floor(Math.random() * 255)
    rgb += (`(${randRgb}, ${randRgb2}, ${randRgb3})`)
 console.log(rgb);
// Question 4
const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
]
const array = [];
for (let i =0; i < countries.length; i++) {
    array.push(countries[i].toUpperCase())
}
console.log(array);

// Question 5
const newArray =[]
for (let i = 0; i < countries.length; i++) {
    newArray.push(countries[i].length)
}
console.log(newArray);

// Question 6
const anotherArr = []
for (let i = 0;i < countries.length; i++) {
    let slice = countries[i].slice(0, 3)
    let length = countries[i].length
    countries[i]
    anotherArr.push(`[${slice}  ${length} ${countries[i]}]`)
}
console.log(anotherArr);

// Question 7
const oneArray = [];
for (let i = 0;i < countries.length; i++) {
    let coun = countries[i]
    if (coun.includes('land')) {
        oneArray.push(coun);
    }
}
console.log(oneArray);

// Question 8
const twoArray = [];
for (let i = 0; i < countries.length; i++) {
    let con = countries[i];
    if (con.endsWith('ia')) {
        twoArray.push(con)
    }
}
console.log(twoArray);

// Question 9
let Length = 7;
for (let i = 0; i < countries.length; i++) {
    let big = countries[i]
    if (big.length > Length) {
        console.log(big);
    }
}

// Question 10
const twoArr = [];
for (let i = 0; i < countries.length; i++) {
    let cont = countries[i];
    if (cont.length <= 5) {
        twoArr.push(cont)
    }
} console.log(twoArr);

// Question 11
const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
]

let longestChar = "";
for (let i = 0; i < webTechs.length; i++) {
    let web = webTechs[i];
    if (web.length > longestChar.length) {
        longestChar = web
    }
}
console.log(longestChar);

// Question 12
const yourArray = [];
for (let i = 0; i < webTechs.length; i++) {
    let length = webTechs[i].length;
    webTechs[i]
    yourArray.push(`[${webTechs[i]} ${length}]`)
} console.log(yourArray);

// Question 13
let mern =""
const mernStack = ['MongoDB', 'Express', 'React', 'Node'];
for (let i = 0; i < mernStack.length; i++) {
    let reg = mernStack[i]
    console.log(reg[0]);
}
// Question 14

for (let i = 0; i < webTechs.length; i++) {
    webTechs[i]
}
console.log(webTechs);
// OR
for (i of webTechs) {
    webTechs[i]
}
console.log(webTechs);

// Question 15
const anArray = []
const fruit = ['banana', 'orange', 'mango', 'lemon']
for (let i = 3;i >= 0; i--) {
    fruit[i]
    anArray.push(fruit[i])
}
console.log(anArray);
// Question 16
webTechs.push('Express');

const fullArr = [];
let first = webTechs.slice(0, 4);
let second = webTechs.slice(4, 9);
let fullStack = (`[${first}] [${second}]`)
fullArr.push(fullStack)
console.log(fullArr);

let str = ""
for (let i = 0; i < webTechs.length; i++) {
    str = webTechs[i]
    console.log(str);
}

// Level 3
// Question 1
console.log(countries);

// Question 2
countries.sort();
const sortedCountries = countries;
console.log(sortedCountries);

// Question 3
webTechs.sort();
mernStack.sort()
console.log(webTechs);
console.log(mernStack);

// Question 4
const anotherArray = [];
for (let i = 0;i < countries.length; i++) {
    let coun = countries[i]
    if (coun.includes('land')) {
        anotherArray.push(coun);
    }
}
console.log(anotherArray);

// Question 5
// let longestChart =  "";
// let l = 0;
// while (l < countries.length) {
//     l++;
//     let you = countries[i]
//     if (you.length > longestChart.length) {
//         longestChart = you
//     }
// }
// console.log(longestChart);

// Question 6 done
console.log(anotherArray);

// Question 7
const anArr = []
for (let i = 0; i < countries.length; i++) {
    let num = countries[i]
    if (num.length == 4) {
        anArr.push(`${num}`)
    }
}console.log(anArr);

// Question 9
const theArr = []
countries.reverse();
for (let i = 0; i < countries.length; i++) {
    let capital = countries[i]
    // const cap = capital.toUpperCase();
    theArr.push(capital.toUpperCase())
}
console.log(theArr);

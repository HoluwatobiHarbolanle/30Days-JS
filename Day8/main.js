// Level 1
// Question 1
const dog = {};
// Question 2
console.log(dog);

// Question 3
dog.name = "Bingo"
dog.legs = "four"
dog.color = "Brown"
dog.age = 7
dog.bark = 'woof woof'
console.log(dog);

// Question 4
const values = Object.values(dog);
console.log(values);

// Question 5
dog.breed = "flesh"
dog.getDogInfo = function (params) {
    return `${this.name} has ${this.legs} legs, it's color is ${this.color}.\n It is ${this.age} years old.`
}
console.log(dog);
// Level 2
// Question 1
const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
  };

function letMostSkills(params) {
    let mostSkills = ""
    for (const i in users) {
        if (users[i].skills.length > mostSkills.length) {
            mostSkills = [i];
            
        }
    }
    return mostSkills
} console.log(letMostSkills());

// Question 2
// function loggedIn() {
  // let log = "";
//     for (const i in users) {
//       let some = users[i].isLoggedIn(/true/gi) 
//       console.log(some);   
//     }
// //       return log
// // } console.log(loggedIn());
function points(params) {
  let is = ""
  for (let i = 0; i < users.length; i++) {
    if (users[i].points >= 50) {
     is = [i].length;
      
    } return is
    }
}console.log(points());

// Question 3
function mern(params) {
  let MERN = "";
  for (const i in users) {
    if (users[i].skills.includes('MongoDB','Express', 'React','Node','Node.js')) {
      MERN = [i]
      
    }
  } return MERN
} console.log(mern());

// Question 4
const copyUsers = Object.assign({}, users)
copyUsers.oluwatobi = {
  email: 'time@time.com',
  skills: ['HTML', 'CSS', 'JavaScript'],
  age: 5
}
console.log(copyUsers);

// Question 5
const keys = Object.keys(users);
console.log(keys);

// Question 6
const value = Object.values(users);
console.log(value);

// Question 7
const countries = {
  usa: {
    name: "United States of America",
    capital: "Washington D.C.",
    population: 331000000,
    languages: ["English"]
  },
  uk: {
    name: "United Kingdom",
    capital: "London",
    population: 67886011,
    languages: ["English"]
  },
  france: {
    name: "France",
    capital: "Paris",
    population: 65273511,
    languages: ["French"]
  }
};
function printCountry(countryCode) {
  console.log(`Name: ${countries.name}`);
  console.log(`Capital:${countries.capital}`);
  console.log(`Population: ${countries.population}`);
}
printCountry('usa')
// Level 3
// QUESTION 1
const personAccount = {
  firstName: 'Oluwatobi',
  lastName: 'Harbolanle',
  incomes: {
    freelancing: 2000,
    fullStack: 3000,
  },
  expenses: {

  }
}
 console.log(personAccount);
// //  totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods
// function totalIncome() {
//   const v = 0;
//   for (let i in personAccount) {
//     let you = personAccount[i].incomes
//     let value = Object.values(you)
//     v += value
//   }
//   return v
// }console.log(totalIncome());

function accountInfo(params) {
  return `${this.firstName} ${this.lastName}`
}console.log(accountInfo());
// Level 1
let challenge = '  30 Days Of JavaScript  ';
console.log(challenge);
console.log(challenge.length);
console.log(challenge.toUpperCase());
console.log(challenge.toLowerCase());
console.log(challenge.substr(0, 2));
console.log(challenge.substring(3, 21));
console.log(challenge.includes('Script'));
console.log(challenge.split());
console.log(challenge.split(' '));

let name = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
console.log(name.split(','));

console.log(challenge.replace('30 Days Of JavaScript', '30 Days Of Python'));
console.log(challenge.charAt(15));
console.log(challenge.charCodeAt('J'));
console.log(challenge.indexOf('a'));
console.log(challenge.lastIndexOf('a'));

let sentence = 'You cannot end a sentence with because because because is a conjunction';
console.log(sentence.indexOf('because'));
console.log(sentence.lastIndexOf('because'));
console.log(sentence.search('because'));
console.log(challenge.trim()); 
console.log(challenge.startsWith('  '));
console.log(challenge.endsWith('JavaScript  '));
console.log(challenge.match('a'));
console.log(challenge.concat('30 Days Of', 'JavaScript'));
console.log(challenge.repeat(2));


// Level 2
console.log('There is no exercise better for the heart than reaching down and lifting people up.');
console.log("Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.");
let a = '10';
let b = 10;
a = parseInt(a)
console.log(typeof a== typeof b );
let ai = parseFloat('9.8');
console.log(Math.ceil(ai));

let check = 'python';
let see = 'jargon';
console.log(see.includes('on'));
console.log(check.includes('on'));
let sent = "I hope this course is not full of jargon."
console.log(sent.includes('jargon'));

let random = Math.random();
let betw = random * 101;
console.log(betw);

// let rand = Math.random();
// let betwn = rand * 100;
console.log(Math.floor(Math.random() * 40) + 50);

let ran = Math.random();
let bew = ran * 256;
console.log(bew);

let string = 'JavaScript';
let randIndex = Math.floor(Math.random() * string.length);
console.log(randIndex);
let randchar = string.charAt(randIndex);
console.log(randchar);

console.log('1\t1\t1\t1\t1\n2\t1\t2\t4\t8\n3\t1\t3\t9\t27\n4\t1\t4\t16\t64\n5\t1\t5\t25\t125');
console.log(sentence.substr(30, 24));

// Level 3


let love = 'Love is the best thing in this world. Some found their love and some are still looking for their love.';
let pattern = /love/gi;
console.log(love.match(pattern));

let part = /because/gi;
console.log(sentence.match(part));

const sentences = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching';
const latin = /[%$@&;#!?]/gi;
console.log(sentences.replace(latin, ""));

let per = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.';
let pe = /\d+/gi;
console.log(per.match(pe));
let li = per.match(pe);
let ab = +li[0] * 12;
let ba = +li[2] * 12;
let result = ab + ba + +li[1];
console.log(result);

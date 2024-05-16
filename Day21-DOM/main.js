// Level 1
// Question 1
let firstP = document.querySelector('p');
console.log(firstP);

// Question 2
let getId1 = document.querySelector('#first-paragraph');
console.log(getId1);
let getId2 = document.querySelector('#second-paragraph');
console.log(getId2);
let getId3 = document.querySelector('#third-paragraph');
console.log(getId3);
let getId4 = document.querySelector('#fourth-paragraph');
console.log(getId4);

// Question 3
let getP = document.querySelectorAll('p');
console.log(getP);

// Question 4
console.log(getP.length);
for(let i = 0; i < getP.length; i++) {
    console.log(getP[i].textContent);
}

// Question 5
getId4.textContent = 'Fourth Paragraph'
console.log(getId4);

// Question 6
getId1.className = 'firstCome';
console.log(getId1);
getId2.id = 'secondId';
console.log(getId2);
getId3.setAttribute('class', 'thirdCome');
console.log(getId3);
getId4.setAttribute('id', 'fourthId')
console.log(getId4);

// Level 2
// Question 1
for(let i = 0; i < getP.length; i++) {
    getP[i].style.backgroundColor = 'blue';
    getP[i].style.fontSize = '25px';
    getP[i].style.border = '2px solid black';
}

// Question 2
for (let i = 0; i < getP.length; i++) {
    if (i%2 === 0){
        getP[i].style.color = 'green'
    } else {
        getP[i].style.color = 'red'
    }
}

// Question 3
getId1.className = 'firstClass';
getId1.textContent = 'This is the first paragraph.';
getId1.id = 'firstId';
console.log(getId1);
getId2.setAttribute('class', 'secondClass');
getId2.setAttribute('id', 'secondId');
getId2.textContent = 'This is the second paragraph.'
console.log(getId2);

// Level 3
// Question 1
// const subs = yearInnerText.substr(30, 34);
// console.log(colorYearElement());

// setInterval(colorYearElement, 1000);
// function setColor(params) {
//     setInterval(() => {
//         subs.style.color = colorYearElement()
//     }, 1000);
// }

// const dateObject = new Date();
// const month = dateObject.getMonth() + 1;
// const date = dateObject.getDate();
// const year = dateObject.getFullYear();
// const hour = dateObject.getHours();
// const minute = dateObject.getMinutes();
// const seconds = dateObject.getSeconds();
// console.log(`${month} ${date}, ${year} ${hour}:${minute}:${seconds}`);

const colors = ["red", "green", "purple", "blue", "yellow", "brown"]
count = 0

const setColor = () => {
    setInterval(() => {
        const col= colors[count]
        if (count === 6) {
            count = 0
        } else {
            document.getElementById("changeYear").style.color = col
            count ++
        }
    }, 1000);
}
setColor()

// const time = new Date();
// const month = time.getMonth() + 1;
// const date = time.getDate();
// const year = time.getFullYear();
// const hour = time.getHours();
// const min = time.getMinutes();
// const seconds = time.getSeconds();
// const result = `${month} ${date}, ${year} ${hour}:${min}:${seconds}`
// console.log(result);

function dateTimeBg() {
    document.querySelector("#dateTimeBg").innerHTML = new Date().toLocaleString()
    setInterval(() => {
    const col = colors[count]
    if(count === 6){
        count = 0
    }else {
        document.getElementById("dateTimeBg").style.backgroundColor = col
        count ++
    }
    }, 1000);
}

dateTimeBg()

const challenge = ['coming', 'done', 'ongoing']
const green = '#1e9943'
const yellow = '#b3ad08'
const red = '#ff0000'
const done = document.getElementById("done").style.backgroundColor = green
const ongoing = document.getElementById("ongoing").style.backgroundColor = yellow
const coming = document.getElementById("coming").style.backgroundColor = red

switch (challenge) {
    case "done":
        userStatus = done
        break;
    case "ongoing":
        userStatus = ongoing
        break;
    case "coming":
        userStatus = coming
        break;    
    default:
        userStatus = coming;
        // break;
}
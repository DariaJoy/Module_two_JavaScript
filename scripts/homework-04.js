// Задание 1

const week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const currentDayIndex = new Date().getDay();
const weekendDayIndex = [0, 6];

// const currentDay = week[currentDayIndex];
// const weekendDaySunday = week[0];
// const weekendDaySaturday = week[6];

// function currentWeekendIndex() {
//     if (currentDay == weekendDaySunday || weekendDaySaturday) {
//         document.write(`bold italic`)
//     }
// } ;




// for (let i = 0; i < week.length; i++) {
//     if (week[i] == weekendDaySunday || week[i] == weekendDaySaturday) {
//         document.write(`<h2 class="bold">${week[i]}</h2><br>`);
//     } else if (week[i] == currentDay) {
//         document.write(`<h2 class="italic">${week[i]}</h2><br>`);
//     } else {
//         document.write(`<h2>${week[i]}</h2><br>`);
//     }
// }

function printIndex(index)  {
    const classes = `text ${currentDayIndex === index ?  'italic' : ''} ${weekendDayIndex.includes(index) ? 'bold' : ''}`
 document.write(`<h2 class='${classes}'>${week[index]}</h2><br>`)
}

for (i = 0; i < week.length; i++) {
    printIndex(i)
}


// Задание 2

const arr = ['85', '71', '312', '99', '33', '78','768']

for (let i = 0; i < arr.length; i++) {
    if (arr[i].startsWith('3') || arr[i].startsWith('7')) {
        console.log(arr[i])
    }
}
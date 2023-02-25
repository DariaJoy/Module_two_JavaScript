// Задание 1

const week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const currentDayIndex = new Date().getDay();
const currentDay = week[currentDayIndex];
const weekendDaySunday = week[0];
const weekendDaySaturday = week[6]

for (let i = 0; i < week.length; i++) {
    if (week[i] == weekendDaySunday || week[i] == weekendDaySaturday) {
        document.write(`<h2 class="bold">${week[i]}</h2><br>`);
    } else if (week[i] == currentDay) {
        document.write(`<h2 class="italic">${week[i]}</h2><br>`);
    } else {
        document.write(`<h2>${week[i]}</h2><br>`);
    }
}


// Задание 2

const arr = ['85', '71', '312', '99', '33', '78','768']

for (let i = 0; i < arr.length; i++) {
    if (arr[i].startsWith('3') || arr[i].startsWith('7')) {
        console.log(arr[i])
    }
}
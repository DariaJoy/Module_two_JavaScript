const salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

const sum = (salaries) => {
    return Object.values(salaries).reduce((a, b) => a + b, 0);
}


console.log(sum(salaries));


const studentScores = {
    Коля: '99',
    Вася: '35',
    Петя: '70',
    Таня: '95',
    Оля: '50',
    Саша: '20'
}

const sortStudents = [];

for (const key in studentScores)
    if (studentScores[key] > 80) {
        delete studentScores[key]
    } else {
        sortStudents.push(key)
    };


console.log(`Студенты: ${sortStudents.toString()} - не прошли!`)

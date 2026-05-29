const students = [  
    { name: 'Alice', grade: 90 },
    { name: 'Bob', grade: 40 },
    { name: 'Charlie', grade: 70 }
]


const analyzeGrades = (students) => {

    let total = 0;
    students.forEach((student) => {
    total += student.grade;
    })
    
    const average = Math.ceil(total / students.length);

    let highest = students[0];
    students.forEach((student) => {
        if (student.grade > highest.grade) {
            highest = student;
        }
    })

    let lowest = students[0];
    students.forEach((student) => {
        if (student.grade < lowest.grade) {
            lowest = student;
        }
    })

    const passingStudents = students.filter(student => student.grade >= 50);
    const passingStudentsNames = passingStudents.map(student => student.name);
    const passing = passingStudentsNames;

return {
    average, 
    highest, 
    lowest, 
    passing
}
}

console.log(analyzeGrades(students));





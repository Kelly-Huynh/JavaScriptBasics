let students = [
{name: "Alice", grade: 90 },
{name: "Bob", grade: 40 },
{name: "Charlie", grade: 70 }
];


const getPassingStudents = (students) => {
    const passingGrade = students.filter(student => student.grade >= 50);
    const names = passingGrade.map(student => student.name);
    const sorted = names.sort();
    return sorted;
}

module.exports = { getPassingStudents, students };
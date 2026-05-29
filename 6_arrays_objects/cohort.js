const cohort = {
    name: 'May2022',
    id: 1234,
    studentNames: []
};

const cohortDetail = (cohort) => {
    console.log(`${cohort.id} - ${cohort.name} - ${cohort.studentNames.length} students in this cohort`);
}
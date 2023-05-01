const Intern = require('../lib/Intern')

const intern = new Intern('Zayden', '12345', 'Zspadafora@gmail.com', 'Ohio State')

test('Need to add new school name', () => {
    expect(intern.school).toEqual('Ohio State')
});


test('Need to go get id by getId method', () => {
    expect(intern.getSchool()).toEqual('Ohio State')
});


test('Need to get Intern role by getRole method', () => {
    expect(intern.getRole()).toEqual('Intern')
});
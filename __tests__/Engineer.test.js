const Engineer = require('../lib/Engineer')

const engineer = new Engineer('Zayden', '12345', 'Zspadafora@gmail.com', 'Zayden25')

test('Need to add new Github user name', () => {
    expect(engineer.github).toEqual('Zayden25')
});


test('Need to go get id by getId method', () => {
    expect(engineer.getGithub()).toEqual('Zayden25')
});


test('Need to get Engineer role by getRole method', () => {
    expect(engineer.getRole()).toEqual('Engineer')
});
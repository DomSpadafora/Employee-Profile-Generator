const Manager = require('../lib/Manager')

const manager = new Manager('Zayden', '12345', 'Zspadafora@gmail.com', '05')

test('Need to go get office number', () => {
    expect(manager.officeNumber).toEqual('05')
});


test('Need to go get id by getOfficeNumber method', () => {
    expect(manager.getOfficeNumber()).toEqual('05')
});


test('Need to get Manager role by getRole method', () => {
    expect(manager.getRole()).toEqual('Manager')
});
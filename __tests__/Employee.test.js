const Employee = require('../lib/Employee')

const employee = new Employee('Zayden', '12345', 'Zspadafora@gmail.com')

test('should create an employee object with name, id, and email', () => {
    expect(employee.name).toEqual('Zayden');
    expect(employee.id).toEqual('12345');
    expect(employee.email).toEqual('Zspadafora@gmail.com');
})

test('Need to go get name by getName method', () => {
    expect(employee.getName()).toEqual('Zayden')
});


test('Need to go get id by getId method', () => {
    expect(employee.getId()).toEqual('12345')
});


test('Need to go get email by getEmail method', () => {
    expect(employee.getEmail()).toEqual('Zspadafora@gmail.com')
});


test('Need to get employee role by getRole method', () => {
    expect(employee.getRole()).toEqual('Employee')
});
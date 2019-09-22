const domainMethods = require('../domainServices/registrationDomainServices');

user = 
{
id: 1,
userName: 'Walter',
userLastname: 'Fuentes',
userEmail: 'Fuentes@jimmy'

}



test('name should contain only letters', () =>{
    expect(domainMethods.isNameValid(user.userName)).toBe(true);
 }); 

 test('lastName should contain only letters', () =>{
    expect(domainMethods.isLastnameValid(user.userLastname)).toBe(true);
 }); 

 test('email should contain @', () =>{
    expect(domainMethods.isEmailValid(user.userEmail)).toBe(true);
 }); 
    
 test('user should pass all the tests', () =>{
    expect(domainMethods.isUserValid(user)).toBe(true);
 }); 

    

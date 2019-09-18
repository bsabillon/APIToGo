const domainMethods = require('../domainServices/registrationDomainServices');

teacher = 
{id: 1,
teacherName: 'Walter',
teacherLastname: 'Fuentes',
teacherEmail: 'Fuentes@jimmy',
teacherAddress: 'SPS',
teacherPictureURL: 'Nohay',
teacherReputation: '40' }


// test('reputation should be more than 100', () =>{
//    return expect(domainMethods.isReputationValid(teacher)).rejects.toBe('Invalid');
// });   

test('reputation should be less than 100', () =>{
    return expect(domainMethods.isReputationValid(teacher)).resolves.toBe('Valid');
 }); 
    

    

const registrationDomainServices = require('../domainServices/registrationDomainServices');
const axios = require('axios');

const functions = {
fecthUser: () => axios.get('http://localhost:5000/products/GetById/1')
    .then (res=> res.data)
    .catch(err => 'error'),

    fecthProduct: () => axios.get('http://localhost:5000/products/GetById/1')
    .then (res=> res.data)
    .catch(err => 'error')
}
var teacherReputation;

function isLowerThan100(teacherReputation){
if (teacherReputation<=100){
    return true;
}
else{
    return false;
}
};

test('Reputation is <=100', () => {
    expect(isLowerThan100(90)).toEqual(true)
});

test('Reputation is >100', () => {
    expect(isLowerThan100(101)).toEqual(false)
});

var user;

function AgeUser(user){
    if (user>=18){
        return true;
    }
    else{
        return false;
    }
};
    test('User Age is >=18', () => {
        expect(AgeUser(18)).toEqual(true)
    });
    
    test('User Age is <=18', () => {
        expect(AgeUser(17)).toEqual(false)
    });

 
    
    
    test('user fetched name should be Leanne Graham', () => {
        expect.assertions(1);
        return functions.fecthUser()
            .then(data => {
                expect(data.productName).toEqual('Tajadas de platano');

            
            })
    });

    test('user fetched name should be Leanne Graham', () => {
        expect.assertions(1);
        return functions.fecthProduct()
            .then(data => {
                expect(data.id).toBe(1);

            
            })
    });



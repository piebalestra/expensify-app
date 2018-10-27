var nameVar = 'Andrew';
var nameVar = 'Fucked';
console.log('nameVar', nameVar);

let nameLet = 'Andrew';
nameLet = 'Porcodio';
console.log('nameLet', nameLet);

const nameConst = 'Frank';
console.log('nameConst', nameConst);

//Block scoping

const fullName = 'Andrw Mead';
let firstName;

if (fullName) {
     firstName = fullName.split(' ')[0];     
}
console.log(firstName);  
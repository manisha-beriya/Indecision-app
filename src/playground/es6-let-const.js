var nameVar = 'Manisha';
var nameVar = 'Anisha';
console.log('nameVar', nameVar);

let nameLet = 'Nisha';
nameLet = 'Isha';
console.log('nameLet', nameLet);

const nameConst = 'Sha';
console.log('nameConst', nameConst);

// Block scoping

const fullName = 'Manisha Beriya';
let firstName;

if (fullName) {
  firstName = fullName.split(' ')[0];
  console.log(firstName);
}

console.log(firstName);
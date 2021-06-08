function square(x) {
    return x * x;
};

console.log(square(3));

// const squareArrow = (x) => {
//     return x * x;
// };
const squareArrow = (x) => x * x;

console.log(squareArrow(8));

const getfirstName = (fullName) => {
    return fullName.split(' ')[0];
};

console.log(getfirstName('Manisha Beriya'));

const getfirstName2 = (fullName) => fullName.split(' ')[0];

console.log(getfirstName2('Manisha Beriya'));
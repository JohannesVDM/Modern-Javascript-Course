// const sayHello = function () {
//   console.log('Hello');
// }
////////////////////////////

// const sayHello = () => {
//   console.log('Hello');
// }

// sayHello();
//////////////////////////


// One line function does not need {}
// const sayHello = () => console.log('Hello');
////////////////////////////////////////////////


//one line returns 
// const sayHello = () => 'Hello';

// console.log(sayHello);
////////////////////////////

//same as above 

// const sayHello = function () {
//   return 'Hello';
// }
////////////////////////////////

// Return Object  
// const sayHello = () => ({ msg: 'Hello' });
// console.log(sayHello);


//if it is single parameter, you dont need () (parenthesis) around parameter
// const sayHello = name => ({ msg: `Hello ${name}` });

// console.log(sayHello('Johannes'));


//if it is multi-parameter, wrap parameters with parameters;
// const sayHello = (name, lastName) => ({ msg: `Hello ${name} ${lastName}` });
// console.log(sayHello('Johannes', 'van der Merwe'));

//alt
// const sayHello = (name, lastName) => console.log({ msg: `Hello ${name} ${lastName}` });
// sayHello('Johannes', 'van der Merwe');


//array 
// const users = ['Nathan', 'James', 'Sarah', 'Erin'];

// const nameLengths = users.map(function (name) {
//   return name.length;
// });

// console.log(nameLengths);

//arrow
// const users = ['Nathan', 'James', 'Sarah', 'Erin'];

// const nameLengths = users.map((name) => {
//   return name.length;
// });
// console.log(nameLengths);
//shortest

const users = ['Nathan', 'James', 'Sarah', 'Erin'];

const nameLengths = users.map(name => name.length);
console.log(nameLengths);
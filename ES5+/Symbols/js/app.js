// //create symbol 
// const sym1 = Symbol();
// const sym2 = Symbol('sym2');

// //console.log(typeof sym2);

// console.log(Symbol('123') === Symbol('123'));
// console.log(Symbol(`Hello(${String(sym1)})`));

// // unique object keys

// const KEY1 = Symbol();
// const KEY2 = Symbol('sym2');

// const myObj = {};

// myObj[KEY1] = 'Prop1';

// console.log(myObj[KEY1]);
// console.log(myObj[KEY2]);
// myObj.key3 = 'Prop3';

// //symbols are not enumerable in for...in 
// for (let i in myObj) {
//   console.log(`${i}: ${myObj[i]}`);
// }

let testWord = 'Hellothere';
testWord = testWord.split(5) + join(' ');
console.log(testWord);
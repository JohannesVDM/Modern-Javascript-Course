const map1 = new Map();

const key1 = 'some string',
  key2 = {},
  key3 = function () { };

// set map values by key
map1.set(key1, 'Value of key1');
map1.set(key2, 'Value of key2');
map1.set(key3, 'Value of key3');


//get vals by key

// console.log(map1.get(key1), map1.get(key2), map1.get(key3));

// console.log(map1.size);

//iterating through maps 

//loop using for...of to get keys in values
// for (let [key, value] of map1) {
//   console.log(`${key} = ${value}`);
// }

// iterate values only 
// for (let value of map1.values()) {
//   console.log(`${value}`);
// }

// map1.forEach(function (value, key) {
//   console.log(`${key}=${value}`);
// });

// console.log(map1);

// const keyValArr = Array.from(map1);
// console.log(keyValArr);

const valArr = Array.from(map1.values());
console.log(valArr);

const keyArr = Array.from(map1.keys());
console.log(keyArr);
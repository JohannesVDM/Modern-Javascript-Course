const set1 = new Set();

set1.add(100);
set1.add('A String');
set1.add({ name: 'John' });
set1.add(true);
set1.add(100);//not possible, sets have to have unique values

// NOTE format 2
// const set2 = new Set([1, true, 'string']);

// console.log(set1);

// console.log(set1.size);

// console.log(set1.has(100));
// console.log(set1.has(50 + 50));
// console.log(set1.has({ name: 'John' })); // this is a reference object and is not actually stored 

// console.log(set1.has({ name: 'John' } === { name: 'John' })); ///pointing to a different location in memory. it is not a primitive type

//delete from set 
// set1.delete(100);

// console.log(set1);

//iterate through sets

//for...of
// for (let item of set1) {
//   console.log(item);
// }

//foreach loop
// set1.forEach((value) => {
//   console.log(value);
// });

const setArr = Array.from(set1);
console.log(setArr);
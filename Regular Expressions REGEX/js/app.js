let re;

// NOTE regular expression
//re = /hello/; //  case sensitive
re = /hello/i;  //  case insensitive
// re = /hello/g;  //  Global search

// console.log(re);
// console.log(re.source);

////NOTE  exec() - Return result in array or null 
// const result = re.exec('hello world');
//NOTE completes
//const result = re.exec('brad hello world');
//NOTE fails
// const result = re.exec('brad hi world');

// console.log(result);
// console.log(result[0]);
// console.log(result.index);
// console.log(result.input);

// NOTE test () - returns true or false 
// const result = re.test('Hello');
// console.log(result);

// NOTE match() - return result array or null 
// const str = 'Hello there';
// // const str = 'Hell there';
// const result = str.match(re);
// console.log(result);


// NOTE search() - returns the index of the first match and if not found returns -1
// const str = 'Hello there';
// //const str = 'BRad Hello there';
// const result = str.search(re);
// console.log(result);

// NOTE replace() - return new string with some or all matches of a pattern  
// const str = 'Hello there';
// const newStr = str.replace(re, 'Hi');

// console.log(newStr);
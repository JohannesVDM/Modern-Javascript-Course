//NOTE try and catch opens the possibility of testing without stopping any processes. 

// try {
//   //reference error: myFunction is not defined
//   myFunction();
// } catch (e) {
//   console.log(e);
//   console.log(e.message);
//   // console.log(e instanceof ReferenceError);
//   // console.log(e instanceof TypeError);
// }

// NOTE better than 
// myfunction();

// try {
//   //myFunction(); //-> reference error: myFunction is not defined
//   //null.myFunction(); //-> typeError
//   //console.log(eval('HELL WORLD')); //-> syntax error
//   decodeURIComponent('%'); //-> uri error
// } catch (e) {
//   console.log(e);
//   // console.log(`${e.name}: WE FOUND SOMETHING`);
//   // console.log(e.message);
//   // console.log(e instanceof ReferenceError);
//   // console.log(e instanceof TypeError);
// } finally {
//   console.log('Finally runs regardless of result');
// }

//NOTE BASIC THROW
//   if (!user.name) {
//     //throw 'User has no name';
//     throw new SyntaxError('User has no name');
//   }

//NOTE ADVANCED THROW
try {
  const user = { email: 'Johannes@gmail.com' };

  if (!user.name) {
    //throw 'User has no name';
    throw new SyntaxError('User has no name');
  }
} catch (e) {
  console.log(`User error: ${e.message}`);
}

console.log('Program continues...');
//iteration sample
function namesIterator(names) {
  let nextIndex = 0;

  return {
    next: function () {
      return nextIndex < names.length ?
        { value: names[nextIndex++], done: false } :
        { done: true }
    }
  }
}

//array of names 
const namesArr = ['Jack', 'Jill', 'John'];
// init iterator 
const names = namesIterator(namesArr);

console.log(names.next());
console.log(names.next());
console.log(names.next());
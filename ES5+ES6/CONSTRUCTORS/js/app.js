

function Person(name, surname, age, dob) {
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.birthday = new Date(dob);

    this.calcAge = function () {
        const diff = Date.now() - this.birthday.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
}

const Brad = new Person("Brad", "Jacobs", 13, "1998-10-03");
const James = new Person("James", "Wagner", 83,);

console.log(Brad.calcAge());
console.log(James);

///////////////////////////////////////////////////////////////////
// DON'T USE THIS, IT IS NOT AN EXACT STRING VALUE, IT BECOMES AN OBJECT IN A STRING, MEANING == WILL WORK and === WONT WORK. FUNCTIONS, OBJECTS, BOOLEANS AND NUMBERS CAN ALSO BE USED WITH THIS BUT IS NOT OPTIMAL
///////////////////////////////////////////////////////////////////

// const name1 = "Jeff";
// const name2 = new String('Jeremy');

// name2.foo = 'bar';

// console.log(name2);

// console.log(typeof name1);
// console.log(typeof (name2));

// if (name2[0] === 'Jeremy') {
//     console.log("yes");
// } else {
//     console.log("no");
//     console.log(typeof (name2[0]));
// }



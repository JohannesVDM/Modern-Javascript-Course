//ES5
//ALL OBJECTS INHERIT PROPERTIES FROM PROTOTYPES
//PROTOTYPES ARE OBJECTS THEMSELVES

function Person(forename, surname, dob) {
    this.forename = forename;
    this.surname = surname;
    this.birthday = new Date(dob);

    // this.calcAge = function () {
    //     const diff = Date.now() - this.birthday.getTime();
    //     const ageDate = new Date(diff);
    //     return Math.abs(ageDate.getUTCFullYear() - 1970);
    // }
}

//CALC age 
Person.prototype.calcAge = function () {
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}

Person.prototype.getFullName = function () {
    const fullName = `${this.forename} ${this.surname}`;
    return fullName;
}

Person.prototype.getsMarried = function (newSurname) {
    this.surname = newSurname;
}

const john = new Person("Johannes", "van der Merwe", "1998-10-03");

const mary = new Person("Mary", "Obama", "1998-03-03");

console.log(john);
console.log(mary);

console.log(john.calcAge());
console.log(mary.calcAge());

console.log(john.getFullName());
console.log(mary.getFullName());

mary.getsMarried("van der Merwe");

console.log(mary.hasOwnProperty('surname'));
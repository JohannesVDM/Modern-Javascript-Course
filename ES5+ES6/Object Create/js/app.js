//This in an alternative to creating objects
const personPrototypes = {
    greeting: function () {
        return `Hello there ${this.firstName} ${this.lastName}`;
    },
    getsMarried: function (newLastName) {
        this.lastName = newLastName;
    }
}

const mary = Object.create(personPrototypes);
mary.firstName = 'Mary';
mary.lastName = 'Williams';

console.log(mary);

console.log(mary.greeting());

mary.getsMarried("Thompson");

console.log(mary);

const brad = Object.create(personPrototypes,
    {
        firstName: { value: 'Brad' },
        lastName: { value: 'Traversy' },
        age: { value: 36 }
    }
);

console.log(brad);

console.log(brad.greeting());
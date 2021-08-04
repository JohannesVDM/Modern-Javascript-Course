class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    greeting() {
        return `Hello there ${this.firstName} ${this.lastName}`;
    }
}

//subclass of person
class Customer extends Person {
    constructor(firstName, lastName, phone, membership) {
        super(firstName, lastName);

        this.phone = phone;
        this.membership = membership;
    }

    //grabbing method in class
    static getMembershipCost() {
        return 500;
    }
    /////////////////////////
}

const john = new Customer('John', 'Doe', '555-555-5555', 'Standard');

console.log(john.greeting());

console.log(Customer.getMembershipCost());
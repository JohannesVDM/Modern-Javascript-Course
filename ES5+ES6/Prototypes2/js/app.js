//Person constructor

function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;

}

Person.prototype.greeting = function () {
    return `Hello there ${this.firstName} ${this.lastName}`;
}

const person1 = new Person("John", "Doe");

//console.log(person1.greeting);

//Customer constructor 
function Customer(firstName, lastName, phone, membership) {
    //NOTE call is a function to inherit from other prototypes
    Person.call(this, firstName, lastName);

    this.phone = phone;
    this.membership = membership;
}

//Inherit person prototype methods
//Customer.prototype = Object.create(Person.prototype);

//Make customer.protype return customer
//Customer.prototype.constructor = Customer;

//Create customer 
const customer1 = new Customer("Tom", "Smith", "030 233 2234", "Standard");

console.log(customer1);

// Customer greeting 
Customer.prototype.greeting = function () {
    return `Hello there ${this.firstName} ${this.lastName} 
    welcome to our company`;

}

console.log(customer1.greeting());
console.log(customer1);

const person = {
    name: "Johannes",
    surname: "van der Merwe",
    birthdate: "1998-10-03",
    getSummary: function () {
        return `My naam is ${this.name} ${this.surname} gebore op ${this.birthdate}`
    }
};

console.log(person.getSummary());
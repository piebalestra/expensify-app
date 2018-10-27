// arguments object - no longer bound with arrow function
const add = (a, b) => {
    //console.log(arguments);
    return a + b;
}

console.log(add(55, 1, 101));

// this keyword - no longer bound


const user = {
    name: 'Pietro',
    cities: ['Philadelphia', 'New York', 'Dublin'],
    //printPlacesLived: function () {
    printPlacesLived() {
        this.cities.forEach((city) => {
            console.log(this.name + ' has lived in ' + city);
        });
        return this.cities.map((city) => this.name + ' has lived in ' + city);
    }
}

console.log(user.printPlacesLived()); 

const multiplier = {
    numbers: [1,2,3],
    multiplyBy: 2,
    multiply() {
        return this.numbers.map((number) => number * this.multiplyBy);
    }
};

console.log(multiplier.multiply())
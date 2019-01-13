//
// Object Destruction
//

// const person = {
//     //name: 'Pietro',
//     age: '28',
//     location: {
//         city: 'Magliaso',
//         temp: 15
//     }
// };

// const {name:firstName = 'Anonymous', age} = person;
// console.log(`${firstName} is ${age}`);

// const {city, temp:temperature} = person.location;
// if (city && temperature){
//     console.log(`It's ${temperature} is ${city}`);
// }


const book = {
    title: 'Ego is the Enemy',
    author: 'Tyan Holliday',
    publisher: {
        //name: 'Pengiun'
    }
}

const {name:publisherName = 'Self-Published'} = book.publisher
console.log(publisherName); 

//
// Array Destructuring
//
const address = ['1299 S Jupiter Street', 'Philadelphia', 'Pennsylvania', '19232'];
const [, city, state = 'New York'] = address;
console.log(`You are in ${city} ${state}.`);

const item = ['Coffe (hot)', '$2.00', '$2.50', '$2.75'];
const [itemName, , mediumPrice] = item;

console.log(`A medium ${itemName} cost ${mediumPrice}`);


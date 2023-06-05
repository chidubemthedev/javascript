// const ids = new Set(["hi", "hello", "val"]);
// ids.add(2);
// ids.delete(2);

// for (const entry of ids.values()) {
//   console.log(entry);
// }

// const person1 = { name: "val" };
// const person2 = { name: "anita" };

// const personData = new Map([[person1, [{ date: "yesterday", price: 100 }]]]);

// personData.set(person2, [{ date: "last year", price: 500 }]);

// console.log(personData);
// console.log(personData.get(person1));

// for (const [key, value] of personData.entries()) {
//     console.log(key, value)
// }

// for (const key of personData.keys()) {
//     console.log(key)
// }
// for (const value of personData.values()) {
//     console.log(value)
// }

let person = { name: "Val" };
const persons = new WeakSet();
persons.add(person);
// some operations
// person = null;

console.log(persons);

const personData = new WeakMap();
personData.set(person, "xxxxxxxxxxxx");

person = null;

console.log(personData);

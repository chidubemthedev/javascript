// const numbers = [1, 2, 3, 4, 5];
// console.log(numbers);

// // const moreNumbers = new Array(5);
// // console.log(moreNumbers);

// // const yetMoreNumbers = Array.of(9,9,9)
// // console.log(yetMoreNumbers)

// const listItems = document.querySelectorAll("li");
// console.log(listItems);

// const arrayList = Array.from(listItems);
// console.log(arrayList);

// const analytics = [
//   [1, 1.6],
//   [2.3, 4.1],
//   [3.1, 6.2],
// ];

// for (const data of analytics) {
//   for (const dataPoint of data) {
//     console.log(dataPoint);
//   }
// }

// const hobbies = ["Sports", "Cooking"];
// hobbies.push("Reading");
// hobbies.unshift("Coding");
// console.log(hobbies);

// hobbies.pop();
// hobbies.shift();
// console.log(hobbies);

// hobbies[1] = "Coding";
// // hobbies[5] = "Nudes"; //Rarely used
// console.log(hobbies);

// hobbies.splice(1, 0, "Dancing", "Boxing");
// console.log(hobbies)
// const removedElements = hobbies.splice(1, 2)
// console.log(hobbies)
// console.log(removedElements)

// const testResults = [1, 5.3, 1.5, 10.99, 1.5, -5, 10];
// // const storedResults = testResults.slice(2);
// const storedResults = testResults.concat([3.99, 2, 3, 4]);
// testResults.push(576);
// console.log(testResults, storedResults);
// console.log(testResults.lastIndexOf(1.5));

// const personData = [{ name: "Val" }, { name: "Anita" }];
// console.log(personData.indexOf({ name: "Anita" }));

// const anita = personData.find((person, idx, persons) => {
//   return person.name === "Anita";
// });

// anita.name = "Valentine";

// console.log(anita, personData);

// const valIndex = personData.findIndex((person, idx, persons) => {
//   return person.name === "Val";
// });

// console.log(valIndex);

// const prices = [10.99, 5.99, 3.99, 6.59];
// const tax = 0.19;
// const taxAdjustedPrices = [];

// // for (const price of prices) {
// //   taxAdjustedPrices.push(price * (1 + tax));
// // }

// prices.forEach((price, index, prices) => {
//     const priceObj = {index: index, taxAdjustedPrice: price * (1 + tax) }
//     taxAdjustedPrices.push(priceObj);
// });

// console.log(taxAdjustedPrices);

// const prices = [10.99, 5.99, 3.99, 6.59];
// const tax = 0.19;

// const taxAdjustedPrices = prices.map((price, index, prices) => {
//   const priceObj = { index: index, taxAdjustedPrice: price * (1 + tax) };
//   return priceObj;
// });

// // console.log(prices, taxAdjustedPrices);

// const sortedPrices = prices.sort((a, b) => {
//   if (a > b) {
//     return 1;
//   } else if (a === b) {
//     return 0;
//   } else {
//     return -1;
//   }
// });
// console.log(sortedPrices.reverse());

// const filteredArray = prices.filter((price) => {
//   return price > 6;
// });

// console.log(filteredArray);

// // let sum = 0;
// // prices.forEach((price) => {
// //   sum = sum + price;
// // });
// // console.log(sum);

// const sum = prices.reduce((prevValue, curValue, curIndex, prices) => {
//   return prevValue + curValue;
// }, 0);

// console.log(sum)

// const data = "new york;10.99;2000";
// const transformedData = data.split(";");
// console.log(transformedData);

// const nameFragments = ["Agulue", "Valentine"];
// const name = nameFragments.join(" ");
// console.log(name);

// const copiedNameFragments = [...nameFragments];
// const coArr = nameFragments.slice();
// nameFragments.push("xxx");
// console.log(nameFragments, copiedNameFragments, coArr);

// console.log(Math.min(...prices));

// const persons = [
//   { name: "Val", age: 24 },
//   { name: "Anita", age: 22 },
// ];

// const copiedPersons = persons.map((person) => ({
//   name: person.name,
//   age: person.age,
// }));
// persons.push({ name: "Nene" });
// persons[0].age = 99;
// console.log(persons, copiedPersons);

// const nameData = ["Agulue", "Valentine", 'xxx', 30];
// // const firstName = nameData[0];
// // const lastName = nameData[1];
// const [firstName, lastName, ...others] = nameData;
// console.log(firstName, lastName, others)
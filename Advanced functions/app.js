const add = (num1, num2) => {
  return num1 + num2;
};

console.log(add(9, 9));
console.log(add(90, 9));

const addRandom = (num1) => {
  return num1 + Math.random();
};

console.log(addRandom(5));

let prevResult = 0;

const addMoreNumbers = (num1, num2) => {
  const sum = num1 + num2;
  prevResult = sum;
  return sum;
};

console.log(addMoreNumbers(3, 3));

const createTaxCalculator = (tax) => {
  const calculateTax = (amount) => {
    return amount * tax;
  };

  return calculateTax;
};

const calculateVatAmount = createTaxCalculator(0.19);
const calculateIncomeTaxAmount = createTaxCalculator(0.25);

console.log(calculateVatAmount(100));
console.log(calculateVatAmount(200));

let userName = "Val";

const greetUser = () => {
  let name = "Rapulu";
  console.log("Hi " + name);
};

let name = "Ebuka";
userName = "Nene";

greetUser();

// const powerOf = (x, n) => {
//   let result = 1;

//   for (let index = 0; index < n; index++) {
//     result = result * x;
//   }
//   return result;
// };

const powerOf = (x, n) => {
  //   if (n === 1) {
  //     return x;
  //   }
  //   return x * powerOf(x, n - 1);

  return n === 1 ? x : x * powerOf(x, n - 1);
};

console.log(powerOf(2, 3)); // 2*2*2

const myself = {
  name: "Val",
  friends: [
    {
      name: "Anthony",
      friends: [
        {
          name: "Joel",
          friends: [{ name: "Isreal", friends: [{ name: "Fred" }] }],
        },
      ],
    },
    {
      name: "James",
      friends: [{ name: "Emma", friends: [{ name: "Tracey" }] }],
    },
  ],
};

const getFriendNames = (person) => {
  let collectedNames = [];

  if (!person.friends) {
    return [];
  }

  for (const friend of person.friends) {
    collectedNames.push(friend.name);
    collectedNames.push(...getFriendNames(friend));
  }

  return collectedNames;
};

console.log(getFriendNames(myself));

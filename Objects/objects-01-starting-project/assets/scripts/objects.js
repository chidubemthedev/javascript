const movieList = document.getElementById("movie-list");

movieList.style.backgroundColor = "red";
movieList.style.display = "block";

const userChosenKeyName = "level";

const person = {
  "First name": "Valentine",
  age: 24,
  hobbies: ["Sports", "Cooking"],
  [userChosenKeyName]: () => {},
  greet: () => {
    alert("Hi there!");
  },
  1.5: "hello",
};
delete person.age;
person.isAdmin = true;
console.log(person["First name"]);
console.log(person["1.5"]);
console.log(person);

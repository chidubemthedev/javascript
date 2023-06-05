const storeBtn = document.getElementById("store-btn");
const retrieveBtn = document.getElementById("retrieve-btn");

const userId = "u123fIu8";
const user = {
  name: "Nene",
  age: 18,
  hobbies: ["Drung", "Cooking"],
};

storeBtn.addEventListener("click", () => {
  sessionStorage.setItem("uid", userId);
  localStorage.setItem("User", JSON.stringify(user));
});

retrieveBtn.addEventListener("click", () => {
  const id = sessionStorage.getItem("uid");
  const extractedUser = JSON.parse(localStorage.getItem("User"));

  if (id) {
    console.log(`Got the id: ${id}`);
    console.log(extractedUser)
  } else {
    console.log("Nothing found.");
  }
});

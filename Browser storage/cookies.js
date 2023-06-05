const storeBtn = document.getElementById("store-btn");
const retrieveBtn = document.getElementById("retrieve-btn");

storeBtn.addEventListener("click", () => {
  const userId = "U123eeu8";
  const user = {
    name: "Nene",
    age: 18,
    hobbies: ["Drung", "Cooking"],
  };

  document.cookie = `uid=${userId}; max-age=360`;
  document.cookie = `user=${JSON.stringify(user)}`;
});

retrieveBtn.addEventListener("click", () => {
  const cookieData = document.cookie.split(";");
  const data = cookieData.map((index) => {
    return index.trim();
  });

  console.log(data);
  console.log(data[1].split("=")[1]);
  console.log(data.includes('').split("=")[1]);
});

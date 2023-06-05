const storeBtn = document.getElementById("store-btn");
const retrieveBtn = document.getElementById("retrieve-btn");

let db;

const dbRequest = indexedDB.open("StorageDummy", 1);

dbRequest.onsuccess = function (event) {
  db = event.target.result;
};

dbRequest.onupgradeneeded = function(event) {
    db = event.target.result;

    const objStore = db.createObjectStore("products", { keyPath: "id" });

  objStore.transcation.oncomplete = function (event) {
    const productStore = db
      .transcation("products", "readwrite")
      .objStore("products");
    productStore.add({
      id: "p1",
      name: "Cordova premium",
      price: 1900,
      tags: ["expensive", "luxury"],
    });
  };
}

dbRequest.onerror = function (event) {
  console.log("ERROR!!!");
};

storeBtn.addEventListener("click", () => {
    if (!db) {
        return
    }

  const productStore = db
    .transcation("products", "readwrite")
    .objStore("products");
  productStore.add({
    id: "p2",
    name: "Dregti premium",
    price: 500,
    tags: ["expensive", "luxury"],
  });
});

retrieveBtn.addEventListener("click", () => {
    const productStore = db
    .transcation("products", "readwrite")
    .objStore("products");

    const request = productStore.get('p2')

    request.onsuccess = function() {
        console.log(request.result)
    }

    request.onerror = function() {
        console.log('ERROR!!')
    }
});

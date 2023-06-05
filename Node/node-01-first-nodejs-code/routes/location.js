const express = require("express");
const MongoClient = require("mongodb").MongoClient;

const router = express.Router();

const uri =
  "mongodb+srv://trillzdboy:Janeal0y@cluster0.ynstvll.mongodb.net/locations?retryWrites=true&w=majority";

const client = new MongoClient(uri);

const locationStorage = {
  locations: [],
};

router.post("/add-location", (req, res, next) => {
  const id = Math.random();
  async function run() {
    try {
      // Connect the client to the server (optional starting in v4.7)
      await client.connect();
      // Establish and verify connection
      await client.db("user-locations").command({ ping: 1 });
      console.log("Connected successfully to server");
    } finally {
      // Ensures that the client will close when you finish/error
      await client.close();
    }
  }

  locationStorage.locations.push({
    id: id,
    address: req.body.address,
    coords: { lat: req.body.lat, lng: req.body.lng },
  });

  res.json({ message: "Location saved!", locId: id });
});

router.get("/location/:lid", (req, res, next) => {
  const locationId = +req.params.lid;
  const location = locationStorage.locations.find((loc) => {
    return loc.id === locationId;
  });

  if (!location) {
    return res.status(404).json({ message: "Not found." });
  }
  res.json({ address: location.address, coordinates: location.coords });
});

module.exports = router;

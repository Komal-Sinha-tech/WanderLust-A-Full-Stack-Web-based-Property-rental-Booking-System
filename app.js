const mongoose = require ("mongoose");
const express = require ("express");
const app = express();
const path = require ("path");
const port = 8080;
const Listing = require ("./models/listing.js");


const Mongo_URL = "mongodb://127.0.0.1:27017/wanderlust";

main()
.then(()=>{
    console.log("Mongodb connected successfully");
}).catch((err)=>{
    console.log(err);
})


async function main() {
  await mongoose.connect(Mongo_URL);

};

app.get("/",(req,res)=>{
    res.send("route is working");
});

app.get("/testListing",async (req,res)=>{
    let sampleListing = new Listing ({
    title:"My New Villa",
    description:"near the beach",
    // image:"beach house",
    price:6000,
    location:"alibaug",
    country:"India",
    });
    await sampleListing.save();
    console.log("Sample is saved");
    res.send("successful testing");
});

app.listen(8080,()=>{
    console.log(`app is listening on port ${port}`);
});
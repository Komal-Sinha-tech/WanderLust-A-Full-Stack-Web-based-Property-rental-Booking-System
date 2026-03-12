const mongoose = require ("mongoose");
const express = require ("express");
const app = express();
const path = require ("path");
const port = 8080;
const Listing = require ("./models/listing.js");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({extended:true}));

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

// app.get("/testListing",async (req,res)=>{
//     let sampleListing = new Listing ({
//     title:"My New Villa",
//     description:"near the beach",
//     // image:"beach house",
//     price:6000,
//     location:"alibaug",
//     country:"India",
//     });
//     await sampleListing.save();
//     console.log("Sample is saved");
//     res.send("successful testing");
// });

//Index Route
app.get("/listings",async (req,res)=>{
 const allListing= await Listing.find({});
 res.render("listings/index",{ allListing });
});

//New Route
app.get("/listings/new",(req,res)=>{
// let newListing = ({
//     title:title,
//     description:description,
//     price:price,
//     image:image,
//     location:location,
//     country:country,
// })
res.render("listings/new.ejs");
});

//Show Route
app.get("/listings/:id",async (req,res)=>{
    let {id} = req.params;
 const listing = await  Listing.findById(id);
  res.render("listings/show.ejs",{ listing });
});

//Create Route
app.post("/listings",async (req,res)=>{
let {title,description,price,image,location,country}= req.body;
// let listing = req.body;
const newListing = new Listing (req.body.listing);
await newListing.save();
res.redirect("/listings");
});



app.listen(8080,()=>{
    console.log(`app is listening on port ${port}`);
});
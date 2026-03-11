const mongoose = require ("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema ({
    title:{
        type:String,
        required:true,
    },
    description:String,
    // image:
    // {
    //     default:"https://unsplash.com/photos/small-white-building-by-the-sea-with-stream-XGiEEXPpnb4",
    //     type:String,
    //     set: (v) => v === "" ? "https://unsplash.com/photos/small-white-building-by-the-sea-with-stream-XGiEEXPpnb4" : v,
    // },
    image: {
    filename: String,
    url: String,
},
    price:Number,
    location:String,
    country:String,

});

const Listing = mongoose.model("Listing",listingSchema);
module.exports= Listing;
const mongoose = require('mongoose');


const mongoURI = "mongodb+srv://amitpandhare100:amit777@cluster0.vkinjt7.mongodb.net/";

const connectToMongo = ()=>{
    mongoose.connect(mongoURI, ()=>{
        console.log("Connected to Mongo Successfully");
    })
}

module.exports = connectToMongo;
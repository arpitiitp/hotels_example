const mongoose=require('mongoose');
// setting mongodb url
const mongourl="mongodb://localhost:27017/hotel";
// connection 
mongoose.connect(mongourl);

// connectionting node to db using db object
const db=mongoose.connection;

//Listners
db.on("connected",()=>{
    console.log("Connected to mongodb server!");
});

db.on("error",(err)=>{
    console.error("Error Occured!",err);
});

db.on("disconnected",()=>{
    console.log("Disconnected to db Server!");
});

//export to server file
module.exports= db ; 


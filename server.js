const express=require('express');
const app=express();// waiter
const db=require('./db.js');

const bodyparser=require('body-parser');

app.use(bodyparser.json());//every json data send by client saved to req.body
app.get("/",(req,res)=>{
    res.send("hello");
});

const personrouter=require("./Routes/personroute.js");
app.use("/person",personrouter);

const menurouter=require("./Routes/menuroute.js");
app.use("/menu",menurouter);


app.listen(3000,()=>{
    console.log("server using port 3000");
});

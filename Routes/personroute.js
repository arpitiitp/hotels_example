const express=require('express');
const router=express.Router();

const person=require("./../model/person.js");

router.post("/",async (req,res)=>{
    try {
     const data =req.body;
 
     const newperson=new person(data);
     const response= await newperson.save();
     console.log("Data stored Successfull!");
     res.status(200).json(response);
    } catch (error) {
      console.log(error);
      res.status(500).json({error:"Internal Server Error"});
    }
 
 });
 router.get("/",async (req,res)=>{
     try {
         const data = await person.find();
         console.log("data found!");
         res.status(200).json(data);
     } catch (error) {
         console.log(error);
         res.status(500).json({error:"Internal Server Error"});
       
     }
 });
 router.get("/:workType",async (req,res)=>{
     try {
         const worktype=req.params.workType;
         let arr=["chef","waiter","manager"];
         if(arr.includes(worktype)){
           const response=await person.find({work:worktype});
           res.status(200).json(response);
         }
         else{
           console.log("not found");
           res.status(404).json({error:"Invalid Worktype!"});
         }
     } catch (error) {
         console.log(error);
         res.status(500).json({error:"Internal Server Error"});
     }
 });

 router.put("/:id",async (req,res)=>{
    try {
        const personid=req.params.id;
        const data=req.body;
        const response=await person.findByIdAndUpdate(personid,data,{
           new:true,
           runValidators:true,
        });
        if(!response){
            console.log("Item Not Found");
           res.status(404).json({error:"Data Not Found!"});
        }
        console.log("data updated!");
        res.status(200).json(response);
        
    } catch (error) {
        console.log(error);
        res.status(500).json({error:"Internal Server Error"});
    }

 });
 router.delete("/:id",async (req,res)=>{
    try {
        const personid=req.params.id;
        const response=await person.findByIdAndDelete(personid);
        if(!response){
            console.log("Item Not Found");
           res.status(404).json({error:"Data Not Found!"});
        }
        console.log("Id deleted succesfully!");
        res.status(200).json({message:"delete successful!"});
        
    } catch (error) {
        console.log(error);
        res.status(500).json({error:"Internal Server Error"});
    }
 });
 module.exports=router;
const express=require('express');
const router=express.Router();

const menu=require('./../model/menu.js');

router.post("/",async (req,res)=>{
    try {
       const data=req.body;
       const newmenu=new menu(data);
       const response=await newmenu.save();
       console.log("menu saved!");
       res.status(200).json(response); 
    } catch (error) {
        console.log(error);
        res.status(500).json({error:"Internal Server Error!"}); 
    }
});
router.get("/",async (req,res)=>{
   try {
    const data=await menu.find();
    console.log("data found!");
    res.status(200).json(data); 
   } catch (error) {
    console.log(error);
    res.status(500).json({error:"Internal Server Error!"}); 
   }
});
module.exports=router;
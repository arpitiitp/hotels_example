const mongoose=require('mongoose');

const personschema=new mongoose.Schema({
  name:{
    type: String,
    required: true
  },
  
  age:{
    type:Number
  },
  work:{
    type:String,
    required:true,
    enum:["chef","waiter","manager"]
  },
  email:{
    type:String,
    required:true,
    unique:true
  },
  mobile:{
    type:String,
    required:true
  },
  address:{
    type:String
  },
  salary:{
    type:Number
  }

});

// create a model
const person = mongoose.model('person', personschema);
module.exports=person;
const mongoose=require('mongoose');

const menuschema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
      typr:Number
    },
    taste:{
        type:String,
        default:"Normal"

    },
    is_drink:{
        type:Boolean,
        default:false
    },
    ingredients:{
        type:[String]
    },
    num_sales:{
       type:Number,
       default:0
    }
});


const menu=mongoose.model('menu',menuschema);
module.exports=menu;
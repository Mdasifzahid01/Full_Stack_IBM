const mongoose = require('mangoose');

const productSchema = new mangoose.Schema ({
    name:{
        type:String,
    },
    category:{
        type:String,
    },
    desc:{
        type:String,
    },
    price:{
        type:String,
    }
});

const 

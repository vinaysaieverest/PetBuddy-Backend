const mongoose = require("mongoose");
export const dataSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password:{
    type:String,
    required:true,
    
  },
  userPhoto:{
    type:String,
    required:false
 },
 pet:[
    {
        petName:{
            type:String,
            required:true,
        },
        gender:{
            type:String,
            required:true,
        },
        emergency:{
            type:Number,
            required:true
        },
        breadName:{
            type:String,
            required:true,
        },
        petPhoto:{
            type:String,
        },
        age:{
            type:Number,
            required:true,
        },
        weight:{
            type:Number,
            required:true,
        },
        height:{
            type:Number,
            required:true,
        },
        color:{
            type:String,
            required:true,
        },
        remarks:{
            type:String,
            required:false,
        },
        remainders:[{
            type:{
                type:String,
                required:true
            },
            remainderName:{
                type:String,
                required:true
            },
            startTime:{
                type:Date,
                required:true
            },
            endTime:{
                type:Date,
                required:true
            }
        }]
    }
   
 ]

})
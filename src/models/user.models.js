const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        firstname: {type: String,required: true},
        lasttname: {type: String,required: false},
        email : {type: String,required: true,unique:true},
        password: {type: String,required: true},
        age: {type: Number,required: true},


    },
    {
        versionKey:false,
        timestamps:true,
    }
);

module.exports = mongoose.model("user",userSchema);

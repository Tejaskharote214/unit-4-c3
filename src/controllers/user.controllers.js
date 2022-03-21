const express = require("express");
const {body, validationResult } = require("express-validator");

const User = require("../models/user.models");

const router = express.Router();

router.post(
    "/",

    body("firstName")
        .trim()
        .isLength({min:3,max:30})
),

    body("age")
    .custom((val)=>{
        if(val<1 || val>150){
            throw new Error ("Invalid age provided")
        }
        return true;
    });

module.exports = router;
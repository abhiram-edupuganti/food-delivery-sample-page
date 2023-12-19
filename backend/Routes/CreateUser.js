const express=require('express');
const router=express.Router();
const User= require('../models/User')

router.post("/createuser" ,async (req,res)=>{
    try{
        await User.create({
            name:"Bruce Wayne",
            password:"ImBatMan",
            email:"lois@wonderwomen.com",
            location:"Gotham"
        })
    res.json({success:true});
    }
    catch(err)
    {
        console.log(err);
        res.json({success:false});
    }
})

module.exports = router;
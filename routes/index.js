const express=require('express')
const router = express.Router()

//@description Login/Landing page
//@route GET /

router.get('/',async (req,res)=>{
    res.render('login',{
        layout:'login' //the login.hbs file in layouts folder is brought up as object
    })
})

//@desc Dashboard page
router.get('/dashboard',async (req,res)=>{
    res.render('dashboard')
})


module.exports=router
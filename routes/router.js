const express = require("express");
const router = new express.Router();
const multer = require("multer");
const users = require("../model/usersSchema");
const moment = require("moment")
const bcrypt = require("bcryptjs");
const saltRounds = 10;
const ObjectId = require("mongodb").ObjectId;

// img storage path
const imgconfig = multer.diskStorage({
    destination:(req,file,callback)=>{
        callback(null,"./uploads")
    },
    filename:(req,file,callback)=>{
        callback(null,`imgae-${Date.now()}. ${file.originalname}`)
    }
})


// img filter
const isImage = (req,file,callback)=>{
    if(file.mimetype.startsWith("image")){
        callback(null,true)
    }else{
        callback(new Error("only images is allowd"))
    }
}

const upload = multer({
    storage:imgconfig,
    fileFilter:isImage
});


// user register
router.post("/register",upload.single("photo"),async(req,res)=>{

    const {filename} = req.file;

    const {fname,lname,username,email,password,age} = req.body;
    
    users.findOne({email:email}).then(savedUser=>{
        if(savedUser){
            return res.status(422).json({error:"User exist!"});
        }
    })
        
      
    // console.log(username);
    if(!fname || !filename){
        res.status(401).json({status:405,message:"fill all the data"})
    }

    try {

        const date = moment(new Date()).format("YYYY-MM-DD");
        
        const userdata = new users({
            fname:fname,
            lname:lname,
            username:username,
            email:email,
            password:password,
            imgpath:filename,
            age:age,
            date:date
        });
   
   
        const finaldata = await userdata.save();
  
        res.status(201).json({status:201,finaldata});

    } catch (error) {
        res.status(401).json({status:401,error})
    }
});


// user data get
router.get("/getdata",async(req,res)=>{
    try {
        const getUser = await users.find();

        res.status(201).json({status:201,getUser})
    } catch (error) {
        res.status(401).json({status:401,error})
    }
});


// delete user data
router.delete("/:id",async(req,res)=>{

    try {
        const {id} = req.params;

        const dltUser = await users.findByIdAndDelete({_id:id});

        res.status(201).json({status:201,dltUser});

    } catch (error) {
        res.status(401).json({status:401,error})
    }

})

router.post("/signin",function(req,response){

    const {email,password}=req.body;

    users.findOne({email:email}).then(savedUser=>{
        if(!savedUser){
            return response.status(422).json({error:"User does not exist!"});
        }
        
            if(password==savedUser.password){
                const {_id,username,email} = savedUser
                response.json({user:{_id,username,email},message:"Welcome!"})
                // response.json({message:"Welcome!"});
            } 
            else{
                return response.status(422).json({error:"Invalid Credentials"});
            }
       
    })

}); 

router.get("/:id",function (req, res) {
    let myquery = { _id: ObjectId( req.params.id )};
    users
        .findOne(myquery, function (err, result) {
          if (err) throw err;
          res.json(result);
        });
   });

module.exports = router;

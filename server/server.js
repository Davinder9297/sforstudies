const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const user = require('./models/user');
const Notes = require('./models/Upload');

const app = express();

app.use(cors());

app.use(bodyParser.json());

app.get('/',(req,res)=>{
    res.json("api running").status(200)
})
app.post('/api/signup', async(req, res) => {
    // console.log("done")
    try {
        const { name, email, password,image } = req.body;
        const data=await user.findOne({email:email})
        // const response=await data.json()
        // console.log(data);
        // res.json(data).status(200)
        if(!name||!email||!password||!image){
            res.json({success:false, message: 'Incomplete data'}).status(404);

        }
        else if(data){
            res.json({success:false, message: 'User already exist'}).status(400);

        }
        else{
            let newuser=await user(req.body)
            await newuser.save()
            // const newUser = { username, email, password };
        
            res.json({success:true, message: 'User registered successfully'}).status(200);
        }
   
    } catch (error) {
        res.json({success:false, message: 'Something wrong with data'}).status(404);

    }
});
app.post('/api/upload', async(req, res) => {
    // console.log("done")
    try {
       
        const { education,email,subeducation,course,subject,doc,semester} = req.body;
        if(!education||!email||!subeducation||!course||!subject||!doc){
            res.json({success:false, message: 'Incomplete data'}).status(404);

        }
        else{

            let newnotes=await Notes(req.body)
            await newnotes.save()
            // const newUser = { username, email, password };
        
            res.json({success:true, message: 'Notes Uploaded Successfully'}).status(200);
        }
   
    } catch (error) {
        res.json({success:false, message: 'Something wrong with data'}).status(404);

    }
});
app.post('/api/login', async(req, res) => {
    // console.log("done")
    try {
        const { email, password} = req.body;
        if(!email||!password){
            res.json({success:false, message: 'Incomplete data'}).status(404);

        }
        else{

        const data=await user.findOne({email:email})              
        res.json({success:true, message: 'User login successfully'}).status(200);
        }
   
    } catch (error) {
        res.json({success:false, message: 'Something wrong with data'}).status(500);

    }
});
app.get('/api/userdetails',async(req,res)=>{
try {
    let {email}=req.query;
    let data=await user.findOne({email:email})
    if(data){
        res.json({success:true, data:data}).status(200);

    }
    else{
        res.json({success:false}).status(404);

    }

} catch (error) {
    res.json({success:false, message: 'user not found'}).status(500);

}
})
app.post('/api/universitynotes',async(req,res)=>{
try {
    let {subeducation,semester,subject,course}=req.body;
    let data=await Notes.find({ $and: [ {subeducation}, { semester}, { subject},{course}] }  )
    if(data.length){
        res.json({success:true, data:data}).status(200);

    }
    else{
        res.json({success:false,message:"Notes not available"}).status(404);

    }

} catch (error) {
    res.json({success:false, message: 'Error in notes api'}).status(500);

}
})
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

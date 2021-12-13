const express =require('express');
const mongoose=require('mongoose');
const cors=require ('cors')
const axios = require("axios")
const app=express();
const User=require('../server/Models/User')
mongoose.connect(' mongodb://127.0.0.1:27017/users',{useNewUrlParser: true, 
useUnifiedTopology: true },()=>{console.log('db connected ...')});
app.use(cors())
app.get("/users/:username",async(req,res)=>{
    try {
        var user  = await findUnique(req.params.username);
        if(user == null ||user == undefined){
        const response = await axios.get(`https://api.github.com/users/${req.params.username}`, { headers: { Authorization: "token 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"}})
        const data = response.data;
    
        res.json(data);
        await create(data);
        }
    } catch(error) {
        console.log(error);
        res.status(500).send('Something went bad!');   
    } 


    
    
})
async function findUnique(login){
    return await User.findOne({ login: login })
}
async function create(user){
    return await User.create({data:user})
}
app.listen(3000,()=>{console.log('server running  at port 3000')})
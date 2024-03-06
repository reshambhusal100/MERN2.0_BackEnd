const mongoose = require('mongoose')

const ConnectionString = "mongodb+srv://reshambhusal430:Resham12345@cluster0.zqcv7bl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
async function connectToDatabase(){
    try{
        await mongoose.connect(ConnectionString, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
    
          });
             // await  mongoose.connect(ConnectionString)
    console.log("Connected To DB Successfully")
    }
    catch(err){
        console.log("The error is", err)
    }

 
 }

 module.exports = connectToDatabase
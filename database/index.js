const mongoose = require('mongoose')

async function connectToDatabase(conString){
    try{
        await mongoose.connect(conString, {
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
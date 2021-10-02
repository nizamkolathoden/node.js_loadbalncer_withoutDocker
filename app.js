const express = require('express');

const app = express();

const PORT = process.env.PORT

if(!PORT){
    console.error("port is not defined")
}

app.get("/",(req,res)=>{
    res.send(`Hello from port : ${PORT} `)
    console.log("wow cool")
})

app.listen(PORT,()=>console.log(`server running on Port ${PORT}`));

const express = require('express');

const app = express();

const PORT = process.env.PORT

if(!PORT){
    console.error("port is not defined");
    console.lo
}

app.get("/",(req,res)=>{
    res.send(`Hello from port : ${PORT} `)
})

app.listen(PORT,()=>console.log(`server running on Port ${PORT}`));

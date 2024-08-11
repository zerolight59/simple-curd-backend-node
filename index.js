const express = require('express')
const mongoose = require('mongoose');
const Product = require('./models/product.model.js');
const app = express()
const ProductRoute =require("./routes/product.route.js")

//middleware
app.use(express.json());
app.use(express.urlencoded({extended:false}))


//routes
app.use("/api/products",ProductRoute)



app.get("/",(req,res)=>{
    res.send("hello from node API servers updated");
});



mongoose.connect("mongodb+srv://USERNAME:PASSWORD@backenddb.5i76j.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB")
.then(()=>{
    console.log("connected to database")
    app.listen(3000,()=>{
        console.log("server is running at the port 3000")
    })
})
.catch(()=>{
    console.log("connected failed")
})

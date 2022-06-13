const express = require("express");
const {connection} = require("./db");
const newsRouter = require("./route/news");


const app = express();
const PORT = process.env.PORT || 8080
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use("/news",newsRouter)

app.listen(PORT, async()=>{
     await connection;
     console.log("connected to db");
     console.log("Server started on http://localhost:8080")
})

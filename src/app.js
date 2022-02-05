const express = require ("express");
const app = express();
const path = require("path");

const routes =require ("./routes/mainRoutes")


app.set("view engine", "ejs")  

app.use (express.static("./public"))  
app.set("views", path.resolve(__dirname, "./views"));


app.use("/",routes)

app.listen (process.env.PORT||3000, () =>{            
    console.log("servidor corriendo en puerto 3000")
})


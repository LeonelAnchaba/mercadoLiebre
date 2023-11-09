const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser")



app.use(express.static("public"))

app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())

app.get ("/", ((req, res) =>{
    res.sendFile(path.join(__dirname, "/views/home.html"));
}))

/*app.get ("/ofertas", ((req, res) =>{
    res.sendFile(path.join(__dirname, "/views/ofertas.html"));
}))

app.get ("/tiendasOficiales", ((req, res) =>{
    res.sendFile(path.join(__dirname, "/views/tiendasOficiales.html"));
}))

app.get ("/vender", ((req, res) =>{
    res.sendFile(path.join(__dirname, "/views/vender.html"));
}))

app.get ("/ayuda", ((req, res) =>{
    res.sendFile(path.join(__dirname, "/views/ayuda.html"));
}))

app.get ("/misCompras", ((req, res) =>{
    res.sendFile(path.join(__dirname, "/views/misCompras.html"));
}))
*/
app.get ("/register", ((req, res) =>{
    res.sendFile(path.join(__dirname, "/views/register.html")); 
}))

app.get ("/login", ((req, res) =>{
    res.sendFile(path.join(__dirname, "/views/login.html"));
}))

app.post("/register",(req,res) => {
    console.log(req.body);
    res.redirect("/login");
})

app.post("/login",(req,res) => {
    console.log(req.body);
    res.redirect("/");
})




app.listen (3000, ()=>{
    console.log("MercadoLiebre corriendo en https://localhost:3000");
})
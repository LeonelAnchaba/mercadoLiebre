const express = require("express");
const app = express();
const path = require("path");



app.use(express.static("public"))

app.get ("/", ((req, res) =>{
    res.sendFile(path.join(__dirname, "/views/home.html"));
}))

app.get ("/ofertas", ((req, res) =>{
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

app.get ("/creaTuCuenta", ((req, res) =>{
    res.sendFile(path.join(__dirname, "/views/creaTuCuenta.html"));
}))

app.get ("/ingresa", ((req, res) =>{
    res.sendFile(path.join(__dirname, "/views/ingresa.html"));
}))

app.get ("/misCompras", ((req, res) =>{
    res.sendFile(path.join(__dirname, "/views/misCompras.html"));
}))


app.listen (3000, ()=>{
    console.log("MercadoLiebre corriendo en puerto 3000");
})
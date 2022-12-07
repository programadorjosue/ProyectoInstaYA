const express = require("express")
const app = express()
const path = require("path");
const {mongoose} = require("./database")

//Settings
app.set("port", process.env.PORT || 3100)


//Middlewares
app.use(express.json())

//Routes
app.use("/api/task", require("./routes/taskRoutes"))



//Static Files
app.use(express.static(path.join(__dirname, "public")))


//Starting the server
app.listen(app.get("port"), () =>{
    console.log(`Servidor en puerto ${app.get("port")}`)
});


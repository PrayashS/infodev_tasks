const express = require ('express')
const app = express()
const bodyParser = require ('body-parser')
const mongoose = require ('mongoose')
const Todo = require("./models/todo")


const port = 3000

//Run ejs file
app.set("view engine", "ejs")
app.use(express.static("public"))
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

// Database Connection
const dburl = "mongodb://localhost:27017/tododb"
mongoose.connect(dburl, { useNewUrlParser: true, useUnifiedTopology: true})

// show data
app.get("/", (req, res) => {
    Todo.find()
    .then(result => {
        res.render("index", {data: result})
    })
})

// Add data
app.post("/", (req, res) => {
    const todo = new Todo({
        todo: req.body.todoValue
    })
    todo.save()
    .then(result => {
        res.redirect("/")
    });
});

// Delete Data
app.delete("/:id", (req, res) => {
    Todo.findByIdAndDelete(req.params.id)
    .then(result => {
        console.log(result)
    })
})



app.listen(port, () => {
    console.log("Server is running on port: http://localhost:3000")
})
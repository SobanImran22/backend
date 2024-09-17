const express = require('express')
const app = express()
const port = 4000

const jokes =[{
    id: 1,
    jokes:"why was the math book sad? because it had to many prolems"
},
{
    id: 2,
    jokes:"what did the tomato say to the orange? 'you are a tomato, not an orange'"
},
{
    id: 3,
    jokes:"why did the scarecrow win an award? he was outstanding in his field"
},
{
    id: 4,
    jokes:"why did the clock break up with the mirror? it saw time run out"
},
]

app.get("/jokes" , (req,res) => {
    res.status(200).json(jokes);
    console.log(jokes)
})
app.get('/home', (req, res) =>{
    res.send("Welcome to my home page!")
})
app.get('/error', (req, res) =>{
    res.send("Welcome to my error page!")
})
app.get('/about' , (req, res) => {
    res.json({

        name: "ali",
        age: 30,
        city: "New York"
    })
    
})

app.get('/cart',(req,res) => {
    res.send("hello ths is cart page🤘🤘😎😎")
})
app.get('/class',(req,res) => {
    res.send("hello ths is class page😎😎🤘🤘")
})
app.listen(port, () =>{
    console.log("App listening on port 4000!")
})
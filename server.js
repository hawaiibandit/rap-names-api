const express = require('express')
const app = express()
const PORT = 8000

const savage = {
    name: "Shenya",
    birthLocation: "London",
    age: 29 

}


app.get('/', (request , response ) => {
    response.sendFile(__dirname + '/index.html') // __dirname  looks in the current dictory 
})

app.listen(PORT ,()=>{
    console.log (`Server now runing in port: ${PORT}`)
})

app.get('/api',(request , response)=>{
    response.json(savage)
})
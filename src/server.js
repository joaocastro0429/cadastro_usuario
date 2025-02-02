const express = require('express')
const routes= require('./routes')

const server= express()
server.use(express.json())
server.use(routes)

// Middleware for logging requests
server.use((request,response,next)=>{
    next()
    return response.send("404 NOT FOUND")
})

server.listen(5555,()=>console.log('Server is running on port 5555'))
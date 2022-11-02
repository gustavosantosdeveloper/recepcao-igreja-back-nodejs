const express = require('express');
const server = express();
server.use(express.json())
server.use(express.urlencoded({ extended: false}));
const cors = require('cors');
server.use(cors());

server.listen(3000,()=>{
    console.log("server rodando");
})

module.exports = server;
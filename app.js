const server = require('./server')
const service = require('./usuario/service/usuario-service')
server.get('/',(req,res)=>{
    service.findAll().then(retorno=>{
        res.send(retorno);
    })    
});

server.post('/criar',(req,res)=>{
    console.log(req.body)
    service.criar(req.body).then(retorno=>{
        res.statusCode=201;
        res.send({"retorno":"ok"});
    })
    
})



const { createSecretKey } = require('crypto')
const http=require('http')



const server = http.createServer((req,res)=>{
    res.write('bonjour \n')
    res.write('bonjour  farouha\n')
   
    res.write('bonjour fathi ')
    res.end()



})
server.listen(3000,()=>(console.log('server running')))
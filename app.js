const http = require('http')
const server = http.createServer((req,res)=>{
    let url = req.url;
    if(url =='/home')
    {
        res.end('Welcome  home')
    }
    else if(url == '/about')
    {
        res.end('Welcome to about us page')
    }
    else if (url == '/node')
    res.end('Welcome to my Node js project')
})
server.listen(8500,()=>{
    console.log('run on 4000')
})

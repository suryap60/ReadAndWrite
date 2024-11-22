const http = require('http')

const server = http.createServer((req,res)=>{
    res.writeHead(200,{'Content-type':'text/html'})
    res.write('<h1>hello</h1>')
    res.end()
})

server.listen(()=>{
    console.log("http://'localhost:4000'")
})
// server.listen(4000)


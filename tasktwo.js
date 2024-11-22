const http = require('http')

const server = http.createServer((req,res)=>{
    res.writeHead(200,{'Content-type':'text/html'})
    // res.write('<h1>hello</h1>')
    // res.end()

    if(req.url == '/'){
        res.statusCode=200;
        res.end('<h1>Welcome to Home page</h2>')
    }else if(req.url == '/about'){
        res.statusCode=200;
        res.end('<h1>About Us</h2>')
    }
    else if(req.url == '/contact'){
        res.statusCode=200;
        res.end('<h1>Contact Us</h2>')
    }else{
        res.statusCode=404;
        res.end('404 page is not found')
        
    }
})

// server.listen(()=>{
//     console.log("http://'localhost:4000'")
// })
server.listen(4000)




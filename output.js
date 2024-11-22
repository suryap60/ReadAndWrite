
const fs = require('fs')

// const res =fs.readFileSync('file.txt','utf-8')
// console.log(res)

// fs.writeFileSync('output.txt',res)

fs.readFile('file.txt','utf-8',(err,data)=>{
    console.log(err)
    console.log(data)
    fs.writeFile('output.txt',data,(err)=>{
        console.log(err)
        fs.appendFile('output.txt','hello',(err)=>{
            console.log(err)
        })
        
    })
})




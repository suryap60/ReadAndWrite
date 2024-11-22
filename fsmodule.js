const fs = require('fs')

// Synchronous Method

// write File-create a file
// fs.writeFileSync('new.txt','HelloWorld')

// replace the current content
// fs.writeFileSync('new.txt','EveyOne')

// Read File- read the content of file
// console.log(fs.readFileSync('new.txt','utf-8'))
// console.log(fs.readFileSync('new.txt','utf16le'))
// console.log(fs.readFileSync('new.txt','ucs-2'))
// console.log(fs.readFileSync('new.txt','hex'))
// console.log(fs.readFileSync('new.txt'))

// Asynchronous Method 

// write file -create a file

// fs.writeFile('newfile.txt','New',(err,data)=>{
//     console.log('saved')
// }
// )


// Read File
// fs.readFile('file.txt','utf-8',(err,data)=>{
//     console.log(err)
//     console.log(data)
// }
// )

// console.log('end')



// How to add more data


// fs.appendFile('file.txt','lolololo',(err)=>{
    
//     console.log(err)
// })
// const res1 =fs.readFile('file.txt','utf-8',(err,data)=>{
//     console.log(data)
// })



fs.appendFileSync('newfile.txt','hello everyone')
const res2 = fs.readFileSync('newfile.txt','utf-8')
console.log(res2)

console.log('end')
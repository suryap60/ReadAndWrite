
const eventEmmitter = require('events')

const greeting = new eventEmmitter()
greeting.on('greet',(name)=>{
    console.log(`Hello ,${name}!`)
})
greeting.emit('greet','Surya')
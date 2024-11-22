
const fs = require('fs')

fs.readFileSync('file.txt','utf-8')
const exist =fs.existsSync('file.txt')

if(exist){
    fs.appendFileSync('file.txt','Hello Every One ,How are You?')
}else{
    fs.writeFileSync('totoo.txt','New File Created!')
}
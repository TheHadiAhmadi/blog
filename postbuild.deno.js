import fs from 'fs'

let content = fs.readFileSync('./output/handler.js', 'utf-8')

content = content.replace(/'uuid'/g, '\'https://skypack.dev/uuid\'')  
content = content.replace(/'nanoid'/g, '\'https://skypack.dev/nanoid\'')  

fs.writeFileSync('./output/handler.js', content)

import fs from 'fs'

let content = fs.readFileSync('./output/handler.js', 'utf-8')

content = content.replace(/'uuid'/g, '\'https://jspm.io/uuid\'')  
content = content.replace(/'nanoid'/g, '\'https://deno.land/x/nanoid/mod.ts\'')  

fs.writeFileSync('./output/handler.js', content)

const fs = require('fs')

fs.writeFile('log-users.txt','criando log ', function(err){
    if(err) throw err
    console.log('Arquivo criado')
})
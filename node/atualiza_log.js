const fs = require('fs')

fs.appendFile('log-users.txt','atualizando...', function(err){
    if(err) throw err
    console.log('Arquivo atualizado!')
})
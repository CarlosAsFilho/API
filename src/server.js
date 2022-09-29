const express = require('express')
const cors = require('cors')
//const path = require('path')


const db = require('./database/db')
const routes = require('./routes/routes')

const app = express()
//conexão com o banco de dados
db.connect()
// SE EU QUISER PERMITIR MAIS DE UM ENDEREÇO 
const allowedOrigins = [
    'http://127.0.0.1:5500',
    'http//wwww.app.com.br'
]
//habilita CORS
//app.use(cors())

// LIMITAR A UM UNICO ENDEREÇO
 app.use(cors({
    origin: function(origin, callback){
        let allowed = true
        //  verificar se  tiver origin 
        // se vier sem oring eu permito ele 
        if(!origin) allowed =true
        // verificar se  a oringe não está dentro da lista de alowedOrigins

        if(!allowedOrigins.includes(origin)) allowed = false
        callback(null, allowed)
    }
})) 


//habilita server para receber dados json
app.use(express.json())

//definindo as rotas
app.use('/api', routes)



//executando o servidor 
const port = process.env.PORT || 8081
app.listen(port, () => console.log(`Server is listeningon on  port ${port}`))
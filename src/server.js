const express = require('express')
//const path = require('path')


const db = require('./database/db')
const routes = require('./routes/routes')

const app = express()
//conexão com o banco de dados
db.connect()
//definindo o template engine


//habilita server para receber dados json
app.use(express.json())

//definindo as rotas
app.use('/api', routes)



//executando o servidor 
const port = process.env.PORT || 8081
app.listen(port, () => console.log(`Server is listeningon on  port ${port}`))
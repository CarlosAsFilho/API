const router = require('express').Router()

const ProductsController = require('../controllers/products')

//verbos http (4tipos)

// get- obter dados 
//post- enviar/receber dados no ponto de vista do client ele tá enviando dados e no ponto de vista do servidor tá recebendo dados 
//put- atualizar dados 
//delete - remover dados 


router.get('/products/:id?',ProductsController.get)
router.post('/products',ProductsController.post)
router.put('/products/:id',ProductsController.put)
router.delete('/products/:id',ProductsController.remove)

module.exports = router
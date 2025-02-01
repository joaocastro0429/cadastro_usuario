const {Router} = require('express')
const userController = require('./controllers/user.controllers')


const router= Router()

router.get('/user',userController)


module.exports = router


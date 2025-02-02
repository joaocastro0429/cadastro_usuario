const {Router} = require('express')
const {getAllUser,getUserById,createUser,updateUser,deleteUser} = require('./controllers/user.controllers')


const router= Router()

router.get('/user',getAllUser)
router.get('/user/:id',getUserById)
router.post('/user',createUser)
router.put('/user/:id',updateUser)
router.delete('/user/:id',deleteUser)



module.exports = router


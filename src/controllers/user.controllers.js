const User = require('../models/db');
const userController = (request,response)=>{
    return response.json({user:User})

}

module.exports = userController;

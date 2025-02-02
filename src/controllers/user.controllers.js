const User= require('../models/db');
const getAllUser = (request,response)=>{
    return response.json({user:User})

}

const getUserById = (request, response) => {
    const {id}= request.params
    const user= User.find(user=>user.id===parseInt(id))
    if(!user){
        return response.status(404).json({error:"User not found"})
    }
    return response.json({user})
    console.log(user)
 
}
const createUser = (request, response) => {
    const {id,name,email}= request.body
    const newUser= {id, name,email}
    User.push(newUser)
    return response.json({newUser})
}
const updateUser = (request,response)=>{
    const {id} = request.params
    const {name,email}= request.body
    const userIndex = User.findIndex(user=>user.id===parseInt(id))
    if (userIndex>=0){
        User[userIndex].name=name
        User[userIndex].email=email
        return response.json({user:User[userIndex]})

    }
    return response.status(404).json({error:"User not found"})
}

const deleteUser = (request,response)=>{
    const {id} =  request.params
    const userIndex = User.findIndex(user=>user.id===parseInt(id))
    if(userIndex>=0){
        User.splice(userIndex,1)
        return response.json({message:"User deleted"})
    }
    return response.status(404).json({error:"User not found"})
}
module.exports ={
    getAllUser,
    getUserById,
    createUser,
    updateUser,
    deleteUser

}

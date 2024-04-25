const userModel = require('../models/usersModel.js');

const getAllUsers = async (req,res) => {
   
    const user = await userModel.find();

    res.status(200);
    res.json({
        status: 'success',
        data: {
            users:user
        },
    });

}

const addUser = async (req,res) =>{
    res.status(201);
    try{
        const data = await userModel.create(req.body);
        console.log(data);
        res.json({
            status: 'success',
            data:{
                users: data,
            }
        });
    }
    catch(err){
        res.json({
            status: 'fail',
            message: err.message,
        });
    }
}

const getUserById = async (req,res) => {

    try{

        const user = await userModel.find({_id:req.params.id}, req.body);
        
        // if(user)
        // {
        //     console.log(user);
        //     return true;
        // }
        // else
        // {
        //     console.log(user);
        //     return false;
        // }
        
         
        res.status(200);
        res.json({
            status: 'success',
            data:{
                users: user,
            }
        });
    }
    catch(err)
    { 
        
       
        res.json({
            status: 'fail',
            message: err.message,
        });
     }

}

const updateUser = async (req,res) => {
    try{
        const user = await userModel.findOneAndUpdate({_id:req.params.id}, req.body);
      
        res.status(200);
        res.json({
            status: 'success',
            data:{
                users: user,
            }
        });
    }
    catch(err){
        res.json({
            status: 'fail',
            message: err.message,
        });
    }
}

const deleteUser = async (req,res) => {
    
    try{
        const user = await userModel.findByIdAndDelete({_id: req.params.id});
        res.status(204);
        res.json({
            status: 'success',
            data: {
                users: user,
            },
        });
    }
    catch(err){
        res.json({
            status: 'fail',
            message: err.message,
        });
    }

}

module.exports = {
    getAllUsers,
    addUser,
    getUserById,
    updateUser,
    deleteUser
}
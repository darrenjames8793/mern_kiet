
const reviewModel = require('../models/reviewModel.js');
const userModel = require('../models/usersModel.js');
const productModel = require('../models/productsModel.js');

const postReview = async (req,res) => {

const userid = req.query.userId;
const productid = req.query.id;
let obj = {
    "userId": userid,
    "productId":productid
}


try {
    // Check if there is a user with the given userId
    
    const user = await userModel.findById({_id:userid});
    const product = await productModel.findById({_id:productid});

    
    
    
    if(!!user && !!product)
    {
        obj =  {"name": user.username,
                "userId": req.query.userId,
                "productId":  req.query.id};
         
        obj = JSON.stringify(obj);         
        console.log(obj);
           
        try{
        res.status(201);

        let data = await reviewModel.create(req.body);
        data.reviews = obj+ data.reviews;

        console.log(data);
        
        res.json({
            status: 'success',
            data:{
                reviews: data,
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
       

  } catch (error) {
    
    
    console.log("user does not exist"); 
    res.end();
  }
  
 
}



module.exports = {
    postReview,
}
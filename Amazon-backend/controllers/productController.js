const productModel = require('../models/productsModel.js');

const getAllProducts = async (req, res) => {
  const {sort='price',page=1,pageSize = 3,fields, ...q}  = req.query;
    let query =  productModel.find(q);

    const sortStr = sort.split(',').join(' ');
    const fieldsStr = fields.split(',').join(' ');

    const skip = pageSize*(page-1);
    
    

    query = query.sort(sortStr);
    query = query.skip(skip).limit(pageSize);
    query = query.select(fieldsStr)


    console.log(q, sort);
    const products = await query;
    const totalResults = await productModel.countDocuments();
    console.log(req.url);
    res.status(200);
    res.json({
        status: 'success',
        results: products.length,

        data:{
            products,
        },
        totalResults,
        pageSize,
        page

    });
}

const createProduct = async (req, res) => {




    res.status(201);
    try{
        const data = await productModel.create(req.body);
        console.log(data);
        res.json({
            status: 'success',
            data:{
                product: data,
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


const updateProduct = async (req, res) => {
    try{
        const data = await productModel.findOneAndUpdate({_id:req.params.id}, req.body);
      
        res.status(200);
        res.json({
            status: 'success',
            data:{
                product: data,
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

const deleteProduct = async (req, res) => {
    try{
        const data = await productModel.findByIdAndDelete({_id: req.params.id});
        res.status(204);
        res.json({
            status: 'success',
            data: {
                product: data,
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
    getAllProducts,
    createProduct,
    updateProduct,
    deleteProduct
}

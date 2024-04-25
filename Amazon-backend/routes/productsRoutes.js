const  express = require("express");

const app = express();
app.use(express.json());

const productsController= require('../controllers/productController.js')

const productRouter = express.Router();

productRouter.route('/')
             .get(productsController.getAllProducts)
             .post(productsController.createProduct);
    
productRouter.route('/:id')
             .put(productsController.updateProduct)
             .delete(productsController.deleteProduct);
    
module.exports=productRouter;
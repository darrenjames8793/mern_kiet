const  express = require("express");

const app = express();
app.use(express.json());

const reviewController= require('../controllers/reviewController.js');

const reviewRouter = express.Router();

reviewRouter.route('/')
             .post(reviewController.postReview);
    

             
module.exports=reviewRouter;
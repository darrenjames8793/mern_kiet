const mongoose = require('mongoose');

const reviewSchema = mongoose.Schema({
    
    name:{
        type: String,
    },

    userId: {
        type: String
    },

    review: {
        type: Number,
        required: true
    },

    description: {
        type: String
    },

    images:[String],

    productId: {
        type: String,
        
    },

    createdAt:{
        type:Date,
        default: new Date(),
    },
    updateAt:{
        type:Date,
        deafault: new Date(),
    },

    // isDeleted: {
    //     Boolean: false
    // }
})

const reviewModel = mongoose.model('reviews',reviewSchema);

module.exports = reviewModel;
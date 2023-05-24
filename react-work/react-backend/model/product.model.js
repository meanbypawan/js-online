import mongoose from 'mongoose';
const productSchema = new mongoose.Schema({
    categoryId:{
        type: mongoose.Schema.ObjectId,
        ref: 'category'
    },
    brandId:{
        type: mongoose.Schema.ObjectId,
        ref: 'brand'
    },
    productName:{
        type: String,
        required: true
    },
    productPrice:{
        type: Number,
        required: true
    },
    productDescription:{
        type: String
    },
    productImage:{
        type: String
    }
});

export const Product = mongoose.model("product",productSchema);
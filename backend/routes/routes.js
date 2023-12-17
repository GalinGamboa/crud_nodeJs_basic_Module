import express from "express";
import Product from '../models/productModel.js'
import clc from 'cli-color';

export const router = new express.Router()



// get ('/')
router.get('/', (req,res)=>{
    res.send({message: 'Node app'});
    console.log(clc.magentaBright('router.get http://localhost:3000/ => ok'));
})


//get ('/products')
router.get('/products',async (req,res)=>{
    try {
        const products = await Product.find({});
        res.status(200).json(products);
        console.log(clc.magentaBright('router.get http://localhost:3000/products => ok'));
    } catch (error) {
        res.status(500).json({message:error.message});
    }
})

// post('/',products)
router.post('/products', async(req,res)=>{
    try {
        const product = await Product.create(req.body);
        res.status(200).json(product);
        console.log(clc.magentaBright('router.post http://localhost:3000/products => ok'))
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message});
    }
})

// get/:id
router.get('/products/:id',async (req,res)=>{
    try {
        const id = req.params.id;
        console.log(clc.red(id));
        const product = await Product.findById(id);
        res.status(200).json(product);
        console.log(clc.magentaBright ('router.get http://localhost:3000/products/......... => ok'));
        
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message});
    }
})

// put/:id
router.put('/products/:id', async(req,res)=>{
    try {
        const id = req.params.id;
        const product = await Product.findByIdAndUpdate(id, req.body);
        if (!product){
            return res.status(404).json({message: `cannot find any product with ID ${id}`});
        }
        const updatedProduct = await Product.findById(id);
        res.status(200).json(updatedProduct);
        console.log(clc.magentaBright ('router.put http://localhost:3000/products/......... => ok'));
    } catch (error) {
        res.status(500).json({message: error.message});
    }
})

// delete/:id
router.delete('/products/:id', async(req,res)=>{
    try {
        const {id} = req.params;
        const product = await Product.findByIdAndDelete(id);
        if (!product){
            return res.status(404).json({message: `cannot find any product with ID ${id}`});
        }
        res.status(200).json(product);
        console.log(clc.magentaBright ('router.delete http://localhost:3000/products/......... => ok'));
    } catch (error) {
        res.status(500).json({message: error.message});
    }
})
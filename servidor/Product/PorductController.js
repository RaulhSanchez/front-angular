const ModelProduct = require('./ProductModel')

module.exports.Add = async (req,res) => {
    try {
        const newProduct = await req.body;
        await ModelProduct.create(newProduct)
        res.send(newProduct)
    } catch (error) {
      res.send(errorHandler(error))
    }
}


module.exports.GetAll = async (req,res) => {
   try {
     const all = await ModelProduct.find()
     res.json(all)
   } catch (error) {
    res.send(errorHandler(error))
   }
}


module.exports.GetById = async (req,res) =>{
    try {
        let product = await ModelProduct.findById(req.params.id)
        if(!product){res.status(400).json({msg:'no existe el producto'})}
        res.json(product)
    } catch (error) {
       console.log(error)
    }
}

module.exports.Delete = async (req,res) => {
    try {
        let product = await ModelProduct.findById(req.params.id);
        if(!product){res.status(400).json({msg:'no existe el producto'})}
        await ModelProduct.findByIdAndDelete(product)
        res.json({producto:product,
        msg:'eliminado'})
    } catch (error) {
        console.log(error)
    }    
}

module.exports.UpdateProd= async (req,res) =>{
    try {
        const{name,category,localization,prize} = req.body
        let product = await ModelProduct.findById(req.params.id)
        if(!product){res.status(400).json({msg:'no existe el producto'})}
        product.name= name
        product.category= category
        product.localization= localization
        product.prize= prize
        await ModelProduct.findByIdAndUpdate({_id:req.params.id},product,{new:true});
        res.json(product)
    } catch (error) {
        
    }
}

function errorHandler(err) {
    return( err);
}
  
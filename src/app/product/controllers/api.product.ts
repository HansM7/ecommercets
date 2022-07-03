import Product from '../model/'
const modelProduct= new Product()

export const getManyController=async(_req:any,res:any)=>{
    const products= await modelProduct.getMany()
    res.json(products)
}

export const getOneController = async(req:any,res:any)=>{ 
    const idProduct=req.params.id-1
    const product=await modelProduct.getOne(idProduct)
    res.json(product)
}

export const createOneController = async(req:any,res:any)=>{
    const data = req.body
    const register = await modelProduct.createOne(data)
    res.json(register)
}

export const editOneController = async(req:any,res:any)=>{
    const idProduct=req.params.id-1
    const data = req.body
    const edited=await modelProduct.editOne(idProduct,data)
    res.json(edited)
}

export const deleteOneController = async(req:any,res:any)=>{
    const idProduct=req.params.id-1
    const deleted=await modelProduct.deleteOne(idProduct)
    res.json(deleted)
}
import Cart from '../model/'
const modelCart= new Cart()

export const getManyController=async(_req:any,res:any)=>{
    const products= await modelCart.getMany()
    res.json(products)
}

export const getOneController=async(req:any,res:any)=>{
    const id = req.params.id-1
    const data = await modelCart.getOne(id)
    res.json(data)
}

export const createOneController=async(_req:any,res:any)=>{
    const register = await modelCart.createOne()
    res.json(register)
}

export const deleteOneController = async(req:any,res:any)=>{
    const id = req.params.id-1
    const deleted = await modelCart.deleteOne(id)
    res.json(deleted)
}

export const getManyProductsController=async(req:any,res:any)=>{
    const idCart = req.params.id-1
    const dataProduct = await modelCart.getManyCartProduct(idCart)
    res.json(dataProduct)
}

export const createOneProductController=async(req:any,res:any)=>{
    const idCart = req.params.id-1
    const data = req.body
    const register = await modelCart.cartRegisterProduct(idCart,data)
    res.json(register)
}

export const deleteOneProductController=async(req:any,res:any)=>{
    const idCart = req.params.id-1
    const idProduct = req.params.id_prod-1
    const deleted = await modelCart.cartDeleteProduct(idCart,idProduct)
    res.json(deleted)
}


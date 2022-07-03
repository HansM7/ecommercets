export const isAdmin = async(req:any,res:any,next:any) =>{
    const admin=req.query.admin
    if (admin==="1") {
        next()
    }else{
        res.json({
            status:"error",
            message:"Sorry, the admin does no exist"
        })
    }
}

export const isId= async(req:any,res:any,next:any)=>{
    const id = req.params.id
    if (isNaN(id)!=true) {
        next()
    }else{
        res.json({
            status:"error",
            message:"The id is not a number"
        })
    }
}

export const isValidationTypes= async(req:any,res:any,next:any )=>{
    const {title,price,thumbnail} = req.body
    if (isNaN(title) === true && isNaN(thumbnail) === true && isNaN(price) === false) {
        if (typeof price === "number") {
            next()
        }else{
            res.json({
                message:"The data type is not supported"
            })
        }
        
    }else{
        res.json({
            message:"The data type is not supported"
        })
    }
}

export const isValidationProperty=async(req:any,res:any,next:any)=>{
    const data= req.body

    // Definir mis propiedades

    const property1="title"
    const property2="price"
    const property3="thumbnail"

    if (data.hasOwnProperty(property1)===true && data.hasOwnProperty(property2)===true && data.hasOwnProperty(property3)===true){
        next()
    }else{
        res.json({
            status:"error",
            message:"The fields are wrong"
        })
    }
}

export const isValidationDelete = async (req:any,res:any,next:any)=>{
    const id = req.params.id
    if (isNaN(id)!=true) {
        next()
    }else{
        res.json({
            status:"error",
            message:"The data type is not supported"
        })
    }
}
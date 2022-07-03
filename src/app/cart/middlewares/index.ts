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

export const isIdDoubleValidation= async(req:any,res:any,next:any)=>{
    const id = req.params.id
    const id_prod = req.params.id_prod
    if (isNaN(id)!=true && isNaN(id_prod)!=true) {
        next()
    }else{
        res.json({
            status:"error",
            message:"The id or id_prod is not a number"
        })
    }
}


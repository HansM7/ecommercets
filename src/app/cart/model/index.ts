export default class Product{

    private data:any[] = [{
        id:1,
        user:[
            {
                id:1,
                name:"Hans Melchor",
                email:"melchorhans@gmail.com"
            }
        ],
        products:[
            {
                id:1,
                title:"Tablet",
                price:200,
                quantity:20,
                thumbnail: "http://localhost"
            },
            {
                id:4,
                title:"Televidor",
                price:1300,
                quantity:10,
                thumbnail: "http://localhost"
            }
        ],
        state:"active"
    }]

    async getMany(){
        try {
            return this.data
        } catch (error) {
            console.log(error)
        }
    }

    async getOne(id:number) {
        try {

            const allDataLengthen = this.data.length-1
            
            if (id<=allDataLengthen) {
                const dataLength = Object.values(this.data[id]).length
            
                if (dataLength>0) {
                    return this.data[id]
                }else{
                    return {
                        message:"the register not exist"
                    }
                } 
            }else{
                return{
                    message:"the register not exist"
                }
            }

        } catch (error) {
            console.log(error)
        }
    }

    async createOne() {
        try {

            const allDataLength = this.data.length

            const dataTransform={
                id:allDataLength+1,
                user:[
                    {
                        id:1,
                        name:"Hans Melchor",
                        email:"melchorhans@gmail.com"
                    }
                ],
                products:[],
                state:"active"
            }
            
            this.data.push(dataTransform)
            return {
                status: "success",
                message: "Successfully registered",
                id:allDataLength+1
            }
        } catch (error) {
            console.log(error)
        }
    }

    async deleteOne(id:number){
        try {
            this.data.splice(id,1,{})
            return {message:"delete successfully!"}
        } catch (error) {
            console.log(error)
        }
    }

    async getManyCartProduct(id:number){
        try {
            return this.data[id].products
        } catch (error) {
            console.log(error)
        }
    }

    // Nota:
    // No le puse validacion al agregar un producto, ya que este se agrega mediante un click y no por un formulario
    async cartRegisterProduct(id:number, newData:any) {  
        try {
            const dataSpecific = await this.data[id]
            dataSpecific.products.push(newData)
            return {
                status: "success",
                message: "Successfully registered",
                dataRegister:newData
            }
        } catch (error) {
            console.log(error)
        } 
        
    }

    async cartDeleteProduct(idCart:number, idProduct:number) {
        try {
            const dataSpecific=await this.data[idCart]
            dataSpecific.products.splice(idProduct,1,{})
            return {message:"delete successfully!"}
        } catch (error) {
            console.log(error)  
        }
    }

}
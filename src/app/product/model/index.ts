export default class Product{

    private data:any[] = [
        {
            id:1,
            title:"Celular",
            price: 600,
            thumbnail: "https://miportal.entel.pe/static/060720220906044/images/SAMSUNG%20GALAXY%20A52%20NEGRO%20FRONTAL_276x549.jpg"
        },
        {
            id:2,
            title:"Televisor",
            price: 4000,
            thumbnail: "https://samsungpe.vtexassets.com/arquivos/ids/178638-1200-auto?width=1200&height=auto&aspect=true"
        },
        {
            id:3,
            title:"Reloj",
            price: 1200,
            thumbnail: "https://home.ripley.com.pe/Attachment/WOP_5/2065277995433/2065277995433_2.jpg"
        },
        {
            id:4,
            title:"Computadora Gamer",
            price: 9000,
            thumbnail: "http://images3.memedroid.com/images/UPLOADED811/5d8a2b5fb62a2.jpeg"
        },
        {
            id:5,
            title:"Laptop",
            price: 3000,
            thumbnail: "https://d598hd2wips7r.cloudfront.net/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/d/e/deziknaturalsilver_1_1_.png"
        },
        {
            id:6,
            title:"Mochila",
            price: 150,
            thumbnail: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/80d9cf5671f548e6b68dad1a00b63c37_9366/Mochila_Monster_Verde_H35748_01_standard.jpg"
        },
    ]

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

    async createOne(newData:any) {
        try {

            const allDataLength = this.data.length

            const dataTransform={
                id:allDataLength+1,
                title:newData.title,
                price:newData.price,
                thumbnail:newData.thumbnail
            }
            
            this.data.push(dataTransform)
            return {
                status: "success",
                message: "Successfully registered"
            }
        } catch (error) {
            console.log(error)
        }
    }

    async editOne(id:number,newData:any) {
        try {
            this.data[id].title = await newData.title
            this.data[id].price = await newData.price
            this.data[id].thumbnail = await newData.thumbnail
            return this.data[id]
        }catch (error) {
            console.log(error)
        }
    }

    async deleteOne (id:number) {
        try {
            this.data.splice(id,1,{})
            return {message:"delete successfully!"}
        } catch (error) {
            console.log(error)  
        }
    }

}
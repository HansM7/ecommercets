// export default 
class Product{
    // private data:object[]
    private data:Array<object>

    constructor(data: []){
        this.data = data
    }

    async getMany(){
        return this.data
    }

    async getOne(id:number) {
        return this.data[id]
    }

    async createOne(newData:object) {
        this.data.push(newData);
    }

}
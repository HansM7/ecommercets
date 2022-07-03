import express  from "express"

import routerProduct from './src/app/product/routes'
import routerCart from './src/app/cart/routes'

import Product from "./src/app/product/model"

const app = express()
const modelProduct = new Product()


// Configuracion de los arhivos vista
app.set('views', './src/views')


app.set('views engine', 'ejs')

app.use(express.static('./public'))

// Seteo de la data en json
app.use(express.urlencoded({ extended: true }))
app.use(express.json())


app.get('/', async(_,res) => {
    const dataProduct= await modelProduct.getMany()
    res.render('index.ejs',{dataProduct})
}) 

app.use('/', routerProduct)
app.use('/', routerCart)


const port = process.env.PORT || 3000
const myServer=app.listen(port)

// const io=new Server(myServer)

// instanceSockets(io)

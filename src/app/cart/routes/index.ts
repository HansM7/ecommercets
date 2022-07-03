import express from 'express'
import { getManyController, createOneController, deleteOneController, getManyProductsController, createOneProductController, deleteOneProductController, getOneController } from '../controllers'
import { isId, isIdDoubleValidation } from '../middlewares'

const router = express.Router()

router.get('/api/carrito', getManyController)
router.get('/api/carrito/:id', isId, getOneController)
router.post('/api/carrito', createOneController)
router.delete('/api/carrito/:id', isId, deleteOneController)

router.get('/api/carrito/:id/productos', isId, getManyProductsController)
router.post('/api/carrito/:id/productos',isId, createOneProductController)
router.delete('/api/carrito/:id/productos/:id_prod',isIdDoubleValidation, deleteOneProductController)

export default router
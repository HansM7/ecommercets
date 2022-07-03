import express from 'express'
import { getManyController,getOneController,createOneController,editOneController,deleteOneController } from '../controllers'
import { isAdmin, isId, isValidationDelete, isValidationProperty, isValidationTypes } from '../middlewares'

const router = express.Router()

router.get('/api/producto', getManyController)
router.get('/api/producto/:id', isId, getOneController)
router.post('/api/producto', isAdmin, isValidationProperty,isValidationTypes, createOneController)
router.put('/api/producto/:id', isAdmin, isValidationTypes, editOneController)
router.delete('/api/producto/:id', isAdmin, isValidationDelete, deleteOneController)

export default router
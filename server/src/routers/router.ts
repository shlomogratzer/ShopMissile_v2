import express, {IRouter,Request,Response} from 'express'
import shopController from '../controllers/shopController'
import authController from '../controllers/authController'
import orgController from '../controllers/orgController'
import {hendleError} from '../utils/errorHendler'
const router:IRouter = express.Router()

router.use('/org',orgController)
router.use('/shop',shopController)
router.use('/auth',authController)
router.use((req:Request,res:Response)=>{
    hendleError(res,404,'page not found')
})
export default router
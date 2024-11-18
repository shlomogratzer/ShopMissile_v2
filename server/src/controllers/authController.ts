import {Router,Request,Response } from "express";
import { IUser } from "../models/UserModel";
import {createUser, loginUser} from '../service/authServise'
import { hendleError } from "../utils/errorHendler";


const router = Router()
router.post('/register', async(req:Request,res:Response):Promise<void> =>{
    try {
        const user:IUser = req.body
        const {username,password,org}:IUser = user
        if(!org){
            throw new Error('user data to sign up is missing')
        }
        const newUser = await createUser(user)
        if(!newUser){
            throw new Error()
        }
        res.json(newUser)
    } catch (error:any) {
        error.status = 400
        hendleError(res,error.status,error.message)
    }
})
router.post('/login', async(req:Request,res:Response):Promise<void> =>{
    try {
        const user:IUser = req.body
        const login = await loginUser(user)
        
        res.json(login)
    } catch (error:any) {
        error.status = 400
        hendleError(res,error.status,error.message)
    }
})

export default router
import { Error } from "mongoose"
import User,{ IUser } from "../models/UserModel"
import { hendleBedReeq } from "../utils/errorHendler"


export const createUser = async (user:IUser) =>{
    try{
        if(!user){
            throw new Error('user data is missing')
        }
        const newUser = new User(user)
        const res = await newUser.save()
        if(!res){
            throw new Error('save user is faild')
        }
        return res
    }
    catch(error:any){
        return hendleBedReeq('create user',error.message)
    }

}
export const loginUser = async (loginuser: IUser)=>{
    try{
        const {username,password} = loginuser
        const user = await User.findOne({username})

        if(!user || !(await user.comparePassword(password))){
            throw new Error('username or password is not correct')
        }
        return {name:user.username , org:user.org}
    }catch(error:any){
        return hendleBedReeq('login',error)
    }
}
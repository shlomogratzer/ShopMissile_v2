import { hendleBedReeq } from '../utils/errorHendler'
import Missil from '../models/MissileModel'

export const getMissileByName = async(name:string) =>{
    try{
        const typeMissile = await Missil.findOne({name:name})
        if(!typeMissile){
            throw new Error('req missile by name falid')
        }
        return typeMissile
    }catch(error:any){
        return hendleBedReeq('getMissileByName',error.message)
    }
}

import { hendleBedReeq } from '../utils/errorHendler'
import { IMissile } from '../models/MissileModel'
import Org, { IOrg } from '../models/OrgMode'
import { getMissileByName } from './missileService'

interface IOrder{
    missile:string
    org : string
    amount:number
}
export const getOrgByName = async(name:string)=>{
    try{
        const org = await Org.findOne({name:name})
        if(!org){
            throw new Error('getOrgByName is faild')
        }
        return org
    }catch(error:any){
        hendleBedReeq('org servise',error.message)
    }
}

export const getWeaponsByOrgName = async (org:IOrg, missileComand:string)=>{
    try{
        const weaponList:any = org.resources.filter(missile => missile.name === missileComand)
        if(!weaponList){
            throw new Error('getWeaponsByOrgName is faild')
        }
        return weaponList
    }catch(error:any){
        hendleBedReeq('org servise',error.message)
    }
}

export const ifYuCenPay = async(order:IOrder) =>{
    try{
        const org:any = await getOrgByName(order.org)
        if(!org){
            throw new Error('ifYuCenPay, getOrgByName faild')
        }
        const missile:any = await getMissileByName(order.missile)
        if(!missile){
            throw new Error('ifYuCenPay, getMissileByName faild')
        }

        const sum = order.amount * missile.price
        if(sum > org.budget){
            return false
        }
        return sum
    }catch(error:any){
        hendleBedReeq('org servise',error.message)
    }
}
export const addAountWapons = (amount:number,sum:number) =>{
    return "order is complit"
}
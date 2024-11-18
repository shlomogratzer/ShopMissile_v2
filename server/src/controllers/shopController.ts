import {Router,Request,Response } from "express";
import {getOrgByName} from '../service/OrgServise'
interface AuthUser{
    org:string
}
const router = Router()
router.post('/mydata', async(req:Request,res:Response):Promise<void> =>{
    // try {
        
    //     const user:AuthUser = req.body
    //     const org = await getOrgByName(user.org)

    //     res.json(org)
    // } catch (error:any) {
    //     console.error(error.messege)
    // }
})
export default router
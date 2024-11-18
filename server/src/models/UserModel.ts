import mongoose,{Schema, Document} from "mongoose";
import bcrypt from 'bcrypt'
 
export interface IUser extends Document {
    username:string,
    password : string,
    org : string,
    comparePassword(userPassword:string): Promise<boolean>
}

const UserSchema = new Schema({
    username:{
        type:String,
        required : true,
        unique:true
    },
    password:{
        type:String,
        required : true,
    },
    org:{
        type:String
    }

}, {timestamps : true})

UserSchema.pre<IUser>('save',async function(next) {
    if(!this.isModified('password')) return next()

    this.password = await bcrypt.hash(this.password,10)
    next()
})

UserSchema.methods.comparePassword = async function(userPassword:string) {
    return await bcrypt.compare(userPassword,this.password)
}
//מגדיר מאפיין ספציפי כאינדקס
UserSchema.index({username:1})

export default mongoose.model<IUser>('User',UserSchema)
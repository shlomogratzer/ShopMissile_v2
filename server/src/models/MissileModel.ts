import mongoose,{Schema, Document} from "mongoose";

 
export interface IMissile extends Document {
    name:string,
    description : string
    speed : number,
    intercepts :[string],
    price: number
}

const MissileSchema = new Schema({
    name:{
        type:String
    },
    description:{
        type:String
    },
    speed:{
        type:Number
    },
    intercepts:{
        type:[String]
    },
    price : {
        type:Number
    },
}, {timestamps : true})

//מגדיר מאפיין ספציפי כאינדקס
MissileSchema.index({name:1})

export default mongoose.model<IMissile>('Missile',MissileSchema)
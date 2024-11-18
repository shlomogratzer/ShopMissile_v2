import mongoose,{Schema, Document} from "mongoose";

 
export interface IOrg extends Document {
    name:string,
    resources: [
      {
        name:string,
        amount: number
      }
    ],
    budget: number
  }

const OrgSchema = new Schema({
    name:{
        type:String
    },
    resources:{
        type:[{
        name:{
            type:String
        },
        amount: {
            type:Number
        }
    }
    ]},
    budget:{
        type:Number
    }

}, {timestamps : true})

//מגדיר מאפיין ספציפי כאינדקס
OrgSchema.index({name:1})

export default mongoose.model<IOrg>('Org',OrgSchema)
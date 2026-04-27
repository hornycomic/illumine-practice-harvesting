import { Schema, models, model } from 'mongoose';
const schema=new Schema({clientId:Schema.Types.ObjectId,name:String,description:String,practiceCategories:[String],isActive:{type:Boolean,default:true}},{timestamps:true});
export const PracticeModel=models.PracticeModel||model('PracticeModel',schema);

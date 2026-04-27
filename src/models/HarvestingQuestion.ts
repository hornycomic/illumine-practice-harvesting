import { Schema, models, model } from 'mongoose';
const schema=new Schema({clientId:Schema.Types.ObjectId,modelId:Schema.Types.ObjectId,category:String,questionText:String,helperText:String,order:Number,isRequired:Boolean,isActive:Boolean},{timestamps:true});
export const HarvestingQuestion=models.HarvestingQuestion||model('HarvestingQuestion',schema);

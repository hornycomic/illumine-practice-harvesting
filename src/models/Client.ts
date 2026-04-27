import { Schema, models, model } from 'mongoose';
const schema=new Schema({name:String,industry:String,businessUnitType:String},{timestamps:true});
export const Client=models.Client||model('Client',schema);

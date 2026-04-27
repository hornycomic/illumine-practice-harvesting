import { Schema, models, model } from 'mongoose';
const schema=new Schema({clientId:Schema.Types.ObjectId,name:String,email:String,passwordHash:String,role:String,assignedOutletIds:[Schema.Types.ObjectId]},{timestamps:true});
export const User=models.User||model('User',schema);

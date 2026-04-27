import { Schema, models, model } from 'mongoose';
const schema=new Schema({clientId:Schema.Types.ObjectId,name:String,code:String,region:String,territory:String,location:String,assignedModelId:Schema.Types.ObjectId,assignedSalesOfficerId:Schema.Types.ObjectId,performanceBand:String},{timestamps:true});
export const Outlet=models.Outlet||model('Outlet',schema);

import { Schema, models, model } from 'mongoose';
const schema=new Schema({sessionId:Schema.Types.ObjectId,practiceId:Schema.Types.ObjectId,type:String,url:String,notes:String},{timestamps:true});
export const Evidence=models.Evidence||model('Evidence',schema);

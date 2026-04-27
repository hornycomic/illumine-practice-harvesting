import { Schema, models, model } from 'mongoose';
const schema=new Schema({clientId:Schema.Types.ObjectId,outletId:Schema.Types.ObjectId,modelId:Schema.Types.ObjectId,harvestingSessionId:Schema.Types.ObjectId,category:String,name:String,description:String,sourceAnswerIds:[Schema.Types.ObjectId],maturity:String,repeatability:String,evidenceStrength:String,tags:[String],status:String,reviewerNotes:String},{timestamps:true});
export const Practice=models.Practice||model('Practice',schema);

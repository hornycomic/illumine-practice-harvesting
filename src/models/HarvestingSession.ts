import { Schema, models, model } from 'mongoose';
const schema=new Schema({clientId:Schema.Types.ObjectId,outletId:Schema.Types.ObjectId,modelId:Schema.Types.ObjectId,salesOfficerId:Schema.Types.ObjectId,status:String,rawAnswers:[{questionId:Schema.Types.ObjectId,answerText:String}],aiSummary:String,submittedAt:Date,reviewedAt:Date},{timestamps:true});
export const HarvestingSession=models.HarvestingSession||model('HarvestingSession',schema);

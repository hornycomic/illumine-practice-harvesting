import mongoose from "mongoose";
let cached: Promise<typeof mongoose> | null = null;
export async function connectToDatabase(){const uri=process.env.MONGODB_URI?.trim();if(!uri)throw new Error("Missing MONGODB_URI");cached ??= mongoose.connect(uri);return cached;}

import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { Document } from "mongoose";



@Schema({
  timestamps: true,
})
export class Details extends Document {
  @Prop()
  postId: mongoose.Types.ObjectId;

  @Prop()
  userId:string;

  @Prop()
  likes:[]
}

export const DetailSchema = SchemaFactory.createForClass(Details);
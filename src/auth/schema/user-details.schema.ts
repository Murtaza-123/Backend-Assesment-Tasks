import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, ObjectId } from "mongoose";
export type UserType = 'user';



@Schema({
  timestamps: true,
})
export class Details extends Document {
  @Prop()
   userId: string;

  @Prop()
  likes: number;
  //type: UserType




}

export const DetailSchema = SchemaFactory.createForClass(Details);
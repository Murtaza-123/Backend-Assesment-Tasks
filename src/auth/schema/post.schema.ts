import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';



@Schema({
  timestamps: true,
})
export class Post extends Document {
  @Prop()
  image: string;

}

export const PostSchema = SchemaFactory.createForClass(Post);
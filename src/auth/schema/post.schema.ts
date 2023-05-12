import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
export type UserType = 'user';



@Schema({
  timestamps: true,
})
export class Post extends Document {
  @Prop()
  image: string;

  @Prop()
  text: string;

  @Prop()
  likes: number[];
  type: UserType

}

export const PostSchema = SchemaFactory.createForClass(Post);
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
export type UserType = 'user' | 'admin';


@Schema({
    timestamps: true,
})
export class User extends Document {
    @Prop()
    name: string;

    @Prop({ unique: [true, 'Duplicate email entered'] })
    email: string;

    @Prop()
    password: string;

    @Prop({ default: 'user' })
    type: UserType;


}

export const UserSchema = SchemaFactory.createForClass(User);
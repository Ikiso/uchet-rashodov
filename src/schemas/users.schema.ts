import {Schema, Prop, SchemaFactory} from '@nestjs/mongoose'
import {Document, Types} from "mongoose";

export type UsersDocument = User & Document

@Schema()
export class User {
    @Prop({required: true })
    username: string;
    @Prop({required: true })
    password: string;
    _id: Types.ObjectId | string;
}

export const UsersSchema = SchemaFactory.createForClass(User)
import { Module } from '@nestjs/common';
import { UserController } from "./user.controller";
import { MongooseModule } from "@nestjs/mongoose";
import { Post, PostSchema } from "../auth/schema/post.schema";
import { UserService } from "./user.service";
import { Details, DetailSchema } from "../auth/schema/user-details.schema";

@Module({
  imports: [MongooseModule.forFeature([{ name: Post.name, schema: PostSchema }]),
    MongooseModule.forFeature([{ name: Details.name, schema: DetailSchema }])

  ],
  controllers: [UserController],
  providers: [UserService]

})
export class UserModule {}

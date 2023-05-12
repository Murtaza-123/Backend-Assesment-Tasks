import { Module } from '@nestjs/common';
import { AdminController } from "./admin.controller";
import { AdminService } from "./admin.service";
import { MongooseModule } from "@nestjs/mongoose";
import { Post, PostSchema } from "../auth/schema/post.schema";

@Module({
  imports: [MongooseModule.forFeature([{ name: Post.name, schema: PostSchema }])],
  controllers: [AdminController],
  providers: [AdminService]
})
export class AdminModule {}

import { forwardRef, Module } from "@nestjs/common";
import { AdminController } from "./admin.controller";
import { AdminService } from "./admin.service";
import { MongooseModule } from "@nestjs/mongoose";
import { Post, PostSchema } from "../auth/schema/post.schema";
import { UserModule } from "../user/user.module";

@Module({
imports: [MongooseModule.forFeature([{ name: Post.name, schema: PostSchema }]),
  forwardRef(()=>UserModule),

],
  controllers: [AdminController],
  providers: [AdminService],
  exports:[AdminService]
})
export class AdminModule {}

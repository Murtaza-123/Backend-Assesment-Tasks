import { forwardRef, Module } from "@nestjs/common";
import { AdminController } from "./admin.controller";
import { AdminService } from "./admin.service";
import { MongooseModule } from "@nestjs/mongoose";
import { Post, PostSchema } from "../auth/schema/post.schema";
import { UserModule } from "../user/user.module";
import { UserGuard } from "../common/guards/api-key/user.guard";
import { JwtService } from "@nestjs/jwt";

@Module({
imports: [MongooseModule.forFeature([{ name: Post.name, schema: PostSchema }]),
  forwardRef(()=>UserModule),
],
  controllers: [AdminController],
  providers: [AdminService , UserGuard , JwtService],
  exports:[AdminService]
})
export class AdminModule {}

import { forwardRef, Module } from "@nestjs/common";
import { UserController } from "./user.controller";
import { MongooseModule } from "@nestjs/mongoose";
import { UserService } from "./user.service";
import { Details, DetailSchema } from "../auth/schema/user-details.schema";
import { AdminModule } from "../admin/admin.module";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Details.name, schema: DetailSchema }]),
    forwardRef(()=>AdminModule),



  ],
  controllers: [UserController],
  providers: [UserService],
  exports:[UserService]

})
export class UserModule {}

import { Body, Controller, Param, Post } from "@nestjs/common";
import { UserService } from "./user.service";
import { ObjectId } from "mongoose";

@Controller('user')
export class UserController {
  constructor(private readonly userService:UserService) {
  }
  @Post('like')
  async likePost(@Body('id') id: ObjectId , @Body ('userId') userId:string ){
    return await this.userService.likePost(id , userId);
  }

  // @Post('unlike')
  // async unlikePost(@Body('id') id: string): Promise<void> {
  //   await this.userService.unlikePost(id);
  // }

}

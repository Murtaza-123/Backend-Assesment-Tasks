import { Body, Controller, Delete, Get, Param, Post, UseGuards } from "@nestjs/common";
import { UserService } from "./user.service";
import { ObjectId } from "mongoose";
import { Roles } from "../common/guards/api-key/roles.decorator";
@UseGuards(UseGuards)
@Controller('user')
export class UserController {
  constructor(private readonly userService:UserService) {
  }
  @Post('like')
  @Roles('user')
  async likePost(@Body('id') id: ObjectId , @Body('userId') userId:string){
    return await this.userService.likePost(id , userId);
  }

  @Delete('unlike')
  async unlikePost(@Body('id') id: ObjectId , @Body('userId') userId:string){
    return await this.userService.unlikePost(id , userId);
  }

  @Get('checkLikedPost')
  async checkLikedPost(@Body('userId') userId:string){
    return await this.userService.checkLikedPost(userId);
  }
}

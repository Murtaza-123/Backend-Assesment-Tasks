import {
  Controller,
  Post,
  UseInterceptors,
  UploadedFile,
  Delete,
  Param,
  Patch,
  Get,
  Body,
  Inject, forwardRef
} from "@nestjs/common";
import { FileInterceptor } from '@nestjs/platform-express';
import { AdminService } from "./admin.service";
import { ObjectId, Query } from "mongoose";
import { UserService } from "../user/user.service";

@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService,
              @Inject(forwardRef(() => UserService))
              private userService: UserService
              ) {}

  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  async uploadImage(@UploadedFile() file: Express.Multer.File) {
    const orignalName = file.originalname
    return this.adminService.uploadImage(orignalName)
  }

  @Delete(':id')
  async deleteFile(@Param('id') id: ObjectId): Promise<void> {
    await this.adminService.deleteFile(id)
  }
  @Patch(':id')
  @UseInterceptors(FileInterceptor('file'))
  async updateImage(@Param('id') id: ObjectId, @UploadedFile() file)
  {
    return this.adminService.updateImage(id , file)
  }


@Get('countAllLikes')
  async countAllLikes(@Body ('id') id:ObjectId)
{
  return await this.userService.countAllLikes(id)
}
}

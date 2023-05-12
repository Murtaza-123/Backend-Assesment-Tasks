import { Controller, Post, UseInterceptors, UploadedFile, Delete, Param, Patch } from "@nestjs/common";
import { FileInterceptor } from '@nestjs/platform-express';
import { AdminService } from "./admin.service";
import { ObjectId, Query } from "mongoose";

@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

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

}

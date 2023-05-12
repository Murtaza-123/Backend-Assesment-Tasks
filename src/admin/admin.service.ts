import { Injectable, NotFoundException, UploadedFile } from "@nestjs/common";
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from "mongoose";
import { Post } from "../auth/schema/post.schema";
import unlinkSync from 'fs'
import * as fs from "fs";

@Injectable()
export class AdminService {
  constructor(@InjectModel(Post.name) private postModel: Model<Post>) {}

  async uploadImage(imageData: string): Promise<Post> {
    const post = new this.postModel({ image: imageData });
    return post.save();
  }
  async deleteFile(fileId: ObjectId) {
    const file = await this.postModel.findById(fileId);
    return file.deleteOne()

  }
  async updateImage(id: ObjectId , newFile: Express.Multer.File ) {
    const updateImage = await this.postModel.findById(id)
      .findOneAndUpdate({ _id: id }, { $set: newFile }, { new: true })
      .exec();
    if (!updateImage) {
      throw new NotFoundException(`image ${id} not found`);
    }
    return updateImage.save();
  }
}
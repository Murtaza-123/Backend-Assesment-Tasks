import { forwardRef, Inject, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model, ObjectId } from "mongoose";
import { Details } from "../auth/schema/user-details.schema";
import { AdminService } from "../admin/admin.service";

@Injectable()
export class UserService {
  constructor(
    @InjectModel(Details.name) private detailsModel: Model<Details>,
    @Inject(forwardRef(() => AdminService))
    private adminService: AdminService
  ) {
  }

  async likePost(id: ObjectId, userId: string) {
    const postId = await this.adminService.findId(id);
    const post = new this.detailsModel({ likes: postId, userId: userId });
    return post.save();
  }

  async unlikePost(id: ObjectId, userId: string) {
    const unlike = await this.detailsModel.findOneAndDelete(id);
    return unlike;
  }

  async checkLikedPost(userName: string) {
    const user = await this.detailsModel.find({ userId: userName });
    if (!user) {
      console.log("user not found");
    }
    return this.detailsModel.find();
  }

  async countAllLikes(id: ObjectId) {
    const count = await this.detailsModel.count(id);
    return count;
  }

}

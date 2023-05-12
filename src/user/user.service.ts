import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/mongoose";
import { Post } from "../auth/schema/post.schema";
import { Model, ObjectId } from "mongoose";
import { Details } from "../auth/schema/user-details.schema";

@Injectable()
export class UserService {
  constructor(@InjectModel(Post.name) private postModel: Model<Post>,
              @InjectModel(Post.name) private detailsModel: Model<Details>,
              ) {}
  async likePost(id: ObjectId, userId: string) {
           await this.postModel.findById(id)
    const add = new this.detailsModel({userId:userId , likes:1})
    return add.save()
   // await this.detailsModel.findByIdAndUpdate(id, { $addToSet: { userId:userId , likes:1  } });
  }

  // async unlikePost(id: string, userId: string): Promise<void> {
  //   await this.postModel.findByIdAndUpdate(id, { $pull: { likes: userId } });
  // }
}

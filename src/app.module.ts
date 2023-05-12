import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import {ConfigModule} from "@nestjs/config";
import {MongooseModule} from "@nestjs/mongoose";
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { UserModule } from './user/user.module';
import { AdminModule } from './admin/admin.module';


@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
  }),MongooseModule.forRoot('mongodb://127.0.0.1:27017/assesment-database'),AuthModule, UserModule, AdminModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

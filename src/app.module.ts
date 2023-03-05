import { Module } from '@nestjs/common';
import {MongooseModule} from "@nestjs/mongoose";
import {ConfigModule} from "@nestjs/config";
import {MongooseConfigService} from "./config/MongooseConfigService";
import configuration from "./config/configuration";
import {UsersModule} from "./users/users.module";

@Module({
  imports: [
       MongooseModule.forRootAsync({
           imports: [ConfigModule],
           useClass: MongooseConfigService,
       }),
      //MongooseModule.forRoot('mongodb://localhost:27017/', {dbName: 'Costs'}),
      ConfigModule.forRoot({
          load: [configuration],
      }),
      UsersModule,
  ],
})
export class AppModule {}

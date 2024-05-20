import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MyListModule } from './my-list/my-list.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthMiddleware } from './middlewares/auth.middleware';
require('dotenv').config();

@Module({
  imports: [MyListModule, MongooseModule.forRoot(process.env.MONGO_URI),],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthMiddleware)
      .forRoutes('*');
    
  }
}

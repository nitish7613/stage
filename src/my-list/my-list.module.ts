import { Module } from '@nestjs/common';
import { MyListController } from './my-list.controller';
import { MyListService } from './my-list.service';
import { MongooseModule } from '@nestjs/mongoose';
import { MyListSchema } from './schema/my-list.schema';
import { TVShowSchema } from './schema/tv-show.schema';
import { MovieSchema } from './schema/movie.schema';
import { UserSchema } from './schema/user.schema';

@Module({
  imports:[
    MongooseModule.forFeature(
      [
        { name: 'MyList', schema: MyListSchema },
        { name: 'TVShow', schema: TVShowSchema },
        { name: 'Movie', schema: MovieSchema },
        { name: 'User', schema: UserSchema }
      ]
    ),
  ],
  controllers: [MyListController],
  providers: [MyListService]
})
export class MyListModule {}

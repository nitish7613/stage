import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { MyList } from './interface/my-list.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Movie } from './interface/movie.interface';
import { TVShow } from './interface/tv-shows.interface';
const ObjectId = require('mongoose').Types.ObjectId;
import * as PaginateModel from 'mongoose-paginate';
// import { PaginateModel } from 'mongoose-paginate';
@Injectable()
export class MyListService {
  constructor(
    @InjectModel('MyList')
    private readonly myListModel: Model<MyList>,
    @InjectModel('TVShow')
    private readonly tvShowModel: Model<TVShow>,
    @InjectModel('Movie')
    private readonly movieModel: Model<Movie>,
  ) { }

  async validateShowExist(userId, showType, showId) {
    let myListDetail = await this.myListModel.findOne({ userId: new ObjectId(userId), showType: showType, showId: new ObjectId(showId) });
    return (myListDetail) ? true : false;
  }

  async validateShowId(showType, showId) {
    let showDetail = null;
    if (showType == "tv") {
      showDetail = await this.tvShowModel.findOne({ _id: new ObjectId(showId) });
    }
    else {
      showDetail = await this.movieModel.findOne({ _id: new ObjectId(showId) });
    }
    return (showDetail) ? true : false;
  }

  async addToList(userId, showType, showId) {
    const myList = new this.myListModel(
      {
        userId: userId,
        showType: showType,
        showId: showId
      }
    );
    return await myList.save();
  }

  async validateListExist(userId, myListId) {
    let myListDetail = await this.myListModel.findOne({ userId: new ObjectId(userId), _id: new ObjectId(myListId) });
    return (myListDetail) ? true : false;
  }

  async removeFromList(userId, myListId) {
    let deleted = await this.myListModel.deleteOne({ userId: new ObjectId(userId), _id: new ObjectId(myListId) });
    return deleted;
  }

  async getAllMyList(userId, params) {
    const sort = { createdAt: 'desc' };
    const page = Number(params.page ? params.page : 1)
    const limit = Number(params.limit ? params.limit : 10)
    let myListDetail = await this.myListModel.find({ userId: new ObjectId(userId) }, null, { sort: sort, skip: Number((page - 1) * limit), limit: Number(limit) });
    return myListDetail;
  }
}


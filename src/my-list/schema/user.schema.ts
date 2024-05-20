import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
    username: String,
    preferences: {
        favoriteGenres: { type: Array, default: [] },
        dislikedGenres: { type: Array, default: [] }
    },
    watchHistory: [
      {
          rating: Number,
          watchedOn: Date,
          contentId: String,
      }
    ],
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now, select: false },
    deletedAt: { type: Date, default: null, select: false },
  } ,{ collection: 'users' });
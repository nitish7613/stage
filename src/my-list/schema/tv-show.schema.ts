import * as mongoose from 'mongoose';

export const TVShowSchema = new mongoose.Schema({
  title: String,
  description: String,
  genres: {
    type: Array,
    default: []
  },
  episodes: [
    {
        episodeNumber: Number,
        seasonNumber: Number,
        releaseDate: Date,
        director: String,
        actors: { type: Array, default: [] } 
    }
  ],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now, select: false },
  deletedAt: { type: Date, default: null, select: false },
} ,{ collection: 'tv_shows' });
import { Document } from 'mongoose';

type Genre = 'Action' | 'Comedy' | 'Drama' | 'Fantasy' | 'Horror' | 'Romance' | 'SciFi';

export interface TVShow extends Document {
    title: string;
    description: string;
    genres: Genre[];
    episodes: Array<{
        episodeNumber: number;
        seasonNumber: number;
        releaseDate: Date;
        director: string;
        actors: string[];
    }>;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
}
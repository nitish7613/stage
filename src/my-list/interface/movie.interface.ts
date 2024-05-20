import { Document } from 'mongoose';

type Genre = 'Action' | 'Comedy' | 'Drama' | 'Fantasy' | 'Horror' | 'Romance' | 'SciFi';

export interface Movie extends Document {
    title: string;
    description: string;
    genres: Genre[];
    releaseDate: Date;
    director: string;
    actors: string[];
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
}
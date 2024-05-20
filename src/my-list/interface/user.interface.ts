import { Document } from 'mongoose';

type Genre = 'Action' | 'Comedy' | 'Drama' | 'Fantasy' | 'Horror' | 'Romance' | 'SciFi';

export interface User extends Document {
    username: string;
    preferences: {
        favoriteGenres: Genre[];
        dislikedGenres: Genre[];
    };
    watchHistory: Array<{
        contentId: string;
        watchedOn: Date;
        rating?: number;
    }>;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
}
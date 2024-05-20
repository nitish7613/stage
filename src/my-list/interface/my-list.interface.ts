import { Document } from 'mongoose';

type ShowType = 'tv' | 'movie';

export interface MyList extends Document {
    userId: string;
    showType: ShowType;
    showId: ShowType;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
}
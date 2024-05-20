import * as mongoose from 'mongoose';
import * as mongoosePaginate from 'mongoose-paginate';

export const MyListSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
    },
    showType: {
        type: String,
        enum: ['tv', 'movie'],
    },
    showId: {
        type: mongoose.Schema.ObjectId
    },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now, select: false },
    deletedAt: { type: Date, default: null, select: false },
}, { collection: 'my_lists' });

// MyListSchema.plugin(mongoosePaginate);
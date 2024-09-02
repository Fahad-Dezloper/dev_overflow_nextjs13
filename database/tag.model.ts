import { Schema, models, model, Document } from 'mongoose';

export interface ITag extends Document {
    name: string;
    description: string;
    questions: Schema.Types.ObjectId[];
    followers: Schema.Types.ObjectId[];
    createdOn: Date;
}

const TagSchema = new Schema({
    name: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    questions: [{ type: Schema.Types.ObjectId, ref: 'Question' }], // reference to related questions
    followers: [{ type: Schema.Types.ObjectId, ref: 'User' }], // reference to users following the tag
    createdOn: { type: Date, default: Date.now } // automatically set the creation date
});

const Tag = models.Tag || model('Tag', TagSchema);

export default Tag;

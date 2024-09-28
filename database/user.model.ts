import { Schema, models, model, Document } from 'mongoose';

export interface IUser extends Document {
    clerkId: string;
    name: string;
    username: string;
    email: string;
    password?: string;
    bio?: string;
    picture: string;
    location?: string;
    portofolioWebsite?: string;
    reputation?: number;
    saved ?: Schema.Types.ObjectId[];
    joinedAt ?: string;
}

const UserSchema = new Schema({
    clerkId: { type: String, required: true },
    name: { type: String, required: true },
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String }, // optional, so no required flag
    bio: { type: String },
    picture: { type: String, required: true },
    location: { type: String },
    portofolioWebsite: { type: String },
    reputation: { type: Number, default: 0 },
    saved: [{ type: Schema.Types.ObjectId, ref: 'Question' }], // reference to saved questions
    joinedAt: { type: Date, default: Date.now } // assuming joinedAt is a Date, not a string
});
// consoel
const User = models.User || model('User', UserSchema);

export default User;

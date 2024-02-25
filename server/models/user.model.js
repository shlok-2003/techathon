import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema(
    {
        uid: {
            type: String,
            required: true,
            trim: true,
        },
        parameters: {
            type: Object,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

const User = mongoose.model('User', UserSchema);
export default User;

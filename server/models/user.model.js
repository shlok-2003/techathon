import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema(
    {
        uid: {
            type: String,
            required: true,
        },
        parameters: {
            type: {
                merits: {
                    type: Number,
                    // required: true,
                },
                total_impacts: {
                    type: Number,
                    // required: true,
                },
                innovation: {
                    type: Number,
                    // required: true,
                },
                community_engagement: {
                    type: Number,
                    // required: true,
                },
                environmental_impact: {
                    type: Number,
                    // required: true,
                },
                efforts_taken: {
                    type: Number,
                    // required: true,
                },
            },
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

const User = mongoose.model('User', UserSchema);
export default User;

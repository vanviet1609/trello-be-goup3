import mongoose from 'mongoose'

const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            trim: true,
            minlength: 3,
            maxlength: 30,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            trim: true,
            lowercase: true,

        },
        password: {
            type: String,
            required: true,
            minlength: 6,
        },
        boards: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Board'
            }
        ],
    },
    {
        versionKey: false,
        timestamps: true,
    }
)

const User = mongoose.model('User', userSchema)
export default User
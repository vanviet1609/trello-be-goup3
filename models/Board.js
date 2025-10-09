import mongoose from 'mongoose'

const boardSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        owner: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
        lists: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'List'
            }
        ],
    },
    {
        versionKey: false,
        timestamps: true,
    }
)

const Board = mongoose.model('Board', boardSchema)
export default Board
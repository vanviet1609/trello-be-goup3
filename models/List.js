import mongoose from 'mongoose'

const listSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        board: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Board',
            required: true,
        },
        cards: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Card'
            }
        ]
    },{
        versionKey: false,
    }
)

const List = mongoose.model('List', listSchema)
export default List
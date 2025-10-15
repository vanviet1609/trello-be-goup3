import mongoose from 'mongoose'

const cardSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        list: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'List',
        },
        description: {
            type: String,
        }
    },
    {
        versionKey: false,
    }
)

const Card = mongoose.model('Card', cardSchema)
export default Card
import {Schema , model} from "mongoose";

const productShema = Schema(
    {
        name: {
            type: String,
            required: [true, "Please enter a product name"]
        },
        quantity: {
            type: Number,
            required: true,
            default: 0
        },
        price: {
            type: Number,
            required: true,
        },
        image: {
            type: String,
            required: false,
        }
    },
    {
        timestamps: true
    }
)

export default model ("Product", productShema)
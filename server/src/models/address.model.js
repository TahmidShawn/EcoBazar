import mongoose from "mongoose";

const addressSchema = new mongoose.Schema(
    {
        label: {
            type: String,
            trim: true,
            default: "Home",
        },
        street: {
            type: String,
            required: [true, "Please enter street address"],
            trim: true,
        },
        city: {
            type: String,
            required: [true, "Please enter city"],
            trim: true,
        },
        state: {
            type: String,
            trim: true,
        },
        postalCode: {
            type: String,
            required: [true, "Please enter postal code"],
            trim: true,
        },
        country: {
            type: String,
            required: [true, "Please enter country"],
            trim: true,
        },
        phone: {
            type: String,
            trim: true,
        },
        isDefault: {
            type: Boolean,
            default: false,
        },
    },
    { timestamps: true },
);

export default addressSchema;

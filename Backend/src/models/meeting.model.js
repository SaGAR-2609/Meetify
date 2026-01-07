import mongoose, { Schema } from "mongoose";

const meetingSchema = new Schema(
    {
        user_id: {type: String},
        meetingCode: {type: String, require},
        date: {type: Date, default: Date.now, require},
    }
);

const Meeting = mongoose.model("Meeting", meetingSchema);

export {Meeting};
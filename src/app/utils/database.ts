import mongoose from "mongoose";

export const connectDb = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI || "");
        console.log("Connected to MongoDB");
    } catch (error) {
        console.log("DB接続に失敗しました:");
        throw new Error();
    }
};


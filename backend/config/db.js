import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://TheLastWeaboo:icaruzs27@cluster0.oa8y0u4.mongodb.net/Big-Brew').then(()=>console.log("DB Connected"));
}
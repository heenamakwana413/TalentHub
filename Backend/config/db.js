import mongoose from "mongoose";

export const connectDB = async (req,res) => {
    await mongoose.connect("mongodb+srv://heenamakwana413_db_user:TalentHub@cluster0.oziitv8.mongodb.net/?appName=Cluster0/job")
    .then(() => {
        console.log("DB CONNECT")
    })
}
import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB Conected");
  } catch (error) {
    console.log(`MongoDB Connection Error : ${error.message}`);
    process.exit(1);
  }
};
export default connectDB;

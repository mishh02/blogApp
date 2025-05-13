const mongoose = require("mongoose");

mongoose.set('strictQuery', false);
const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://mishthigoel02:Ayx4jr9rtITDF1pV@cluster0.joc7lfu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("MongoDB Atlas connected successfully!");
    } catch (err) {
        console.error("MongoDB connection error:", err.message);
        process.exit(1);
    }
};
connectDB();
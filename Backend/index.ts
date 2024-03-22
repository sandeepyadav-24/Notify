import express from "express";
import mongoose from "mongoose";
import authRoutes from "./routes/auth";
import todoRoutes from "./routes/todo";
import generateRoutes from "./routes/generate";
import cors from "cors";
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use("/auth", authRoutes);
app.use("/todo", todoRoutes);
app.use("/generate", generateRoutes);

app.listen(port, () => {
  console.log(`Post is listening at Port : ${port}`);
});

mongoose.connect(
  process.env.MONGO_URL ||
    "mongodb+srv://sandeepyadav24:sandyDon%40123@cluster0.d7vrvhj.mongodb.net/"
);

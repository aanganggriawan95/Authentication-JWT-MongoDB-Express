import express from "express";
import mongoose from "mongoose";
import authRoutes from "./routes/auth.js";
import cors from "cors";

const app = express();

// Koneksi ke MongoDB tanpa opsi deprecated
mongoose
  .connect("mongodb://localhost:27017/my-auth-app")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

// Middleware dan routing (aktifkan jika diperlukan)
app.use(express.json());
app.use(cors());
app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

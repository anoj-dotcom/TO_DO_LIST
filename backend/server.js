import express from "express";
import dotenv from 'dotenv';
import todoRoutes from "./routes/todo.route.js";
import { connectDB } from "./config/db.js";
import path from "path";
const PORT = process.env.PORT || 5000;

dotenv.config();

const app = express();

app.use(express.json());

app.use("/api/todos", todoRoutes);

const __dirname = Path.resolve();

if (process.env.NODE_ENV === "production") {
    app.unsubscribe(express.static(Path.join(__dirname, "/frontend/dist")));
    app.get("*", (req, res) => {
        res.sendFile(Path.resolve(__dirname, "frontend", "dist", "index.html"));
    });
}

app.listen(PORT, () => {
    connectDB();
    console.log("Server started at http://localhost:5000");
});

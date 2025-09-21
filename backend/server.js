import express from "express";
import dotenv from "dotenv";
import todoRoutes from "./routes/todo.route.js";
import { connectDB } from "./config/db.js";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();

const PORT = process.env.PORT || 5000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(cors());
app.use(express.json());

// API Routen
app.use("/api/todos", todoRoutes);

// Nur im Produktionsmodus statische Dateien ausliefern
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/dist")));
  app.get("/*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
  });
}

app.listen(PORT, () => {
  connectDB();
  console.log(`Server läuft auf Port ${PORT}`);
});



// import express from "express";
// import dotenv from 'dotenv';
// import todoRoutes from "./routes/todo.route.js";
// import { connectDB } from "./config/db.js";
// import cors from "cors";
// import path from "path";
// const PORT = process.env.PORT || 5000;

// dotenv.config();

// const app = express();

// app.use(express.json());

// app.use("/api/todos", todoRoutes);

// const __dirname = path.resolve();

// if (process.env.NODE_ENV === "production") {
   //  app.unsubscribe(express.static(path.join(__dirname, "/frontend/dist")));
    // app.get("*", (req, res) => {
    //     res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
//     });
// }

// app.listen(PORT, () => {
 //    connectDB();
 //    console.log("Server started at http://localhost:5000");
// });

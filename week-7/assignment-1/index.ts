import express from "express";
const app = express();
import mongoose from "mongoose";
const port = 3000;
import authRoutes from "./routes/auth";
import todoRoutes from "./routes/todo";
import cors from "cors";

app.use(cors());
app.use(express.json());
app.use("/auth", authRoutes);
app.use("/todo", todoRoutes);

mongoose
   .connect(
      "mongodb+srv://sahilansarimondal:sahil1234@sahildb.jqkiszf.mongodb.net/TodoApp"
   )
   .then(() => console.log("MongoDB is Connected"))
   .catch((err) => console.log(err));

app.listen(port, () => {
   console.log(`Example app listening at http://localhost:${port}`);
});

// mongoose.connect('mongodb://localhost:27017/courses', { dbName: "courses" });

import express from "express";

import employsRoutes from "./routes/route";
import connection from "./config/config";
import { json, urlencoded } from "body-parser";
import cors from "cors";

const app = express();

app.use(cors())
app.use(json());
app.use(urlencoded({ extended: true }));

app.use("/api/v1", employsRoutes);

app.use(
  (
    err: Error,
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    res.status(500).json({ message: err.message });
  }
);

connection
  .sync()
  .then(() => {
    console.log("Database successfully connected");
  })
  .catch((err) => {
    console.log("Error", err);
  });

app.get("/", (req, res) => {
  return res.status(200).json({ message: "Hello World 🤟" });
});

app.listen(3000, () => {
    console.log("Server started on port 3000");
  });

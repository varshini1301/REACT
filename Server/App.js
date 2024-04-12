import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { Sign_route } from "./root/root.js";
import { connectToDB } from "./config.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

connectToDB();
app.use("/signup", Sign_route);
app.all("*", (req, res) => {
  res.send("invalid URL..!");
});

app.listen(process.env.PORT);
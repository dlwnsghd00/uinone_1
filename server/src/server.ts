import express from "express";
import morgan from "morgan";
import { AppDataSource } from "./data-source";
import authRoutes from './routes/auth';
import cors from 'cors';
import * as dotenv from 'dotenv';
import subRoutes from './routes/subs';
import cookieParser from "cookie-parser";
import postRoutes from './routes/posts';
import voteRoutes from './routes/votes';
import userRoutes from './routes/users';
const app = express();
const origin = process.env.ORIGIN;
app.use(cors({
    origin,
    credentials: true
}))
app.use(express.json());
app.use(morgan("dev"));
app.use(cookieParser());

dotenv.config();

app.get("/",(_, res) => res.send("running"));
app.use("/api/auth", authRoutes)
app.use("/api/subs", subRoutes)
app.use("/api/posts", postRoutes)
app.use("/api/votes", voteRoutes)
app.use("/api/users", userRoutes)

app.use(express.static("public"));
let port = 4000;

app.listen(port,async () => {
    console.log(`Server running at ${process.env.APP_URL}`);
    console.log(process.env.origin)
    AppDataSource.initialize().then(async () => {
        console.log("Database Initialized")
    }).catch(error => console.log(error))
})


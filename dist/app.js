console.log('Welcome to the LangChain.js tutorial by LangChainers.');
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import indexRouter from "./routes/index.js";
import usersRouter from "./routes/users.js";
dotenv.config();
const app = express();
const port = process.env.PORT;
app.use(express.json());
//app.use(express.urlencoded());
app.use(express.urlencoded({ extended: true }), cors({
    origin: process.env.CLIENT_URL,
    methods: ["GET", "POST"],
    credentials: true
}));
app.use('/', indexRouter);
app.use('/api', usersRouter);
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});

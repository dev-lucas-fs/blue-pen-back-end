import express from "express";
import 'dotenv/config';

const app = express()

app.listen(process.env.PORT || 4000)
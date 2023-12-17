import mongoose from "mongoose";
import clc from 'cli-color'
import 'dotenv/config';
const uri = process.env.DB_URI;

export const connectDB = mongoose.connect(uri)
.then((result) => {
    console.log(clc.xterm(3).bgXterm(11)(`   MongoDB connected!!   `))
    })
.catch((err) => {
    console.log(clc.red(err));
    });
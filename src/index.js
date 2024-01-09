import dotenv from "dotenv";
import mongoose from 'mongoose';
import express from 'express';
import { DB_NAME } from './constants.js';

dotenv.config({
  path:'./env'
})

const app = express();


(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
    app.on('error',(error) => {
      console.log("Error",error);
    })

    app.listen(process.env.PORT, () => {
      console.log(`listening on port ${process.env.PORT}`);
    })
  } catch (error) {
    console.log('Error:', error);
    throw error;
  }
})()

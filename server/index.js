import express, { application } from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

// express config
const app = express();
app.use(cors());
app.use(express.json());

// enviroment variables
dotenv.config();
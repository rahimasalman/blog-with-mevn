import express, { application } from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

import router from './router/routes.js';

// express config
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// enviroment variables
dotenv.config();

// router
app.use('/posts', router);


// listen on port
app.listen(process.env.PORT, () => {
   mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
   })
      .then(console.log('Server is running on port 5000'))
      .catch(err => console.log(err));
});
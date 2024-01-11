import dbConnect from './config/connectDB.js'
import  Express from 'express';
import dotenv from 'dotenv'
import morgan from 'morgan';
import productRoute from './routes/productRoutes.js'
dotenv.config()
const app = Express();
const port = process.env.PORT || 4001;

import cors from 'cors'
dbConnect();
app.use(Express.json({limit:"50mb"}));
app.use(morgan('dev'));
app.use(Express.urlencoded({ extended: true, limit:"50mb" }));
app.use(cors({ origin: [process.env.HOST], credentials: true, }));
app.use('/', productRoute)


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

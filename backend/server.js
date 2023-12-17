import  express from 'express';
import {router} from './routes/routes.js'
import morgan from 'morgan';
import clc from 'cli-color';
import  {connectDB}  from './config/db.js';
import 'dotenv/config';

const app = express();
const port = process.env.PORT;

connectDB


app.use(morgan('dev'))
app.use(express.json());
app.use(express.urlencoded({extended:false}))
app.use('/',router)

app.listen(port,()=>{
    console.log(clc.cyan(`Server listening on http://localhost:${port}`))
})


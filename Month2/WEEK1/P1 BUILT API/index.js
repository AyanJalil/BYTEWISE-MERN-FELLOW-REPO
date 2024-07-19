import express from 'express';
import bodyParser from 'body-parser';
import userRouter from './routes/user.js'

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.use('/', userRouter);


app.get('/', (req,res)=> res.send("HEello"))

app.listen(PORT, ()=> console.log(`Server is running on PORT: http://localhost:${PORT}`));
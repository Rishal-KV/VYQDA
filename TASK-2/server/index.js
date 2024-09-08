import express from 'express'
import sequelize from './config/db.js';
import noteRoute from './routes/noteRoute.js';
import cors from 'cors'
const app = express();

sequelize.sync().then(() => {
    console.log("db connected");
});
app.use(cors({
    origin:'http://localhost:5173',
   
}))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', noteRoute);


app.listen(3000, () => {
    console.log("server is running");
})
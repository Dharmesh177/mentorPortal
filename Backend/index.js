const express = require('express');
const dotenv=require('dotenv')
const connectDb=require('./config/db')
const cors=require('cors')

dotenv.config({
    path: './config/config.env'
});
const app = express();

app.use(express.json([]))
app.use(express.json({
    extended:true
}))
connectDb();

//import routes
const signupLoginRoute = require('./routes/SignUpLoginroute')
const mentorRoute = require('./routes/Mentorsroute')
const eventRouter = require('./routes/eventRouter')
const historyRouter = require('./routes/historyRouter')
const resourceRouter=require('./routes/resourcesRouter')
const blogRouter=require('./routes/blogRouter')


app.use(cors())
app.use('/api/auth', signupLoginRoute);
app.use('/api/mentors', mentorRoute);
app.use('/api/events', eventRouter);
app.use('/history', historyRouter);
app.use('/rosources', resourceRouter);
app.use('/blog', blogRouter);


const PORT = 5000||process.env.PORT;
app.listen(PORT, console.log("Server is running")); 
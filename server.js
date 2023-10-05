const express = require('express');
const app = express();
const cors = require('cors');
const cookieParser = require('cookie-parser')
require('dotenv').config();
require('./config/mongoose.config');
const likeRoute = require('./routes/likeRoute');
const storyRoute = require('./routes/storyRoute');

app.use(express.json(), express.urlencoded({ extended: true }));
app.use(cors({credentials:true, origin:'http://localhost:3000'}));
app.use(cookieParser())

likeRoute(app);
storyRoute(app);

app.listen(8000, ()=> console.log('The server is all fired up on port 8000'));
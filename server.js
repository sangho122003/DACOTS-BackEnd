// Import Libarys
require('dotenv').config();
const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const app = express();
const PORT = process.env.PORT || 3000;
const path = require('path');

// const Router
const authRouter = require('./routes/authRouter')
const commentRouter = require('./routes/commentRouter')
const likeRouter = require('./routes/likeRouter')
const postRouter = require('./routes/postRouter')
const storyRouter = require('./routes/storyRouter')

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

//import Router 
app.use('/api/auths',authRouter)
app.use('/api/comments',commentRouter)
app.use('/api/likes',likeRouter)
app.use('/api/posts',postRouter)
app.use('/api/storys',storyRouter)

// Run Server
app.listen(PORT, () => {
    console.log(`Server chạy trên cổng ${PORT}`);
});

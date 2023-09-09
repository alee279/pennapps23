const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');
const tokenRoutes = require('./routes/tokenRoutes');


// express app
const app = express();

// whitelist localhost 3000
app.use(cors({ credentials: true, origin: ['http://localhost:3000'] }));

// middleware
app.use(express.json());
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

app.use('/users/', userRoutes);
app.use('/tokens/', tokenRoutes);

// connect to database
async function connectToMongoDB() {
    await mongoose.connect("mongodb+srv://kleekev:xECEEwKQuNW4Y0Qj@cluster0.qqcjexs.mongodb.net/pennapps?retryWrites=true&w=majority");
    
    // listen for requests
    app.listen(4000, () => {
        console.log('Listening on port ', 4000);
    });
}
connectToMongoDB().catch((err) => console.log(err));
require('dotenv').config();
const express = require('express');
const app = express();
const tasks = require('./routes/tasks');
const connectDB = require('./db/connection');

//middleware
app.use(express.json());

// routes
app.get('/', (req, res) => {
    res.send('Hello')
});

app.use('/api/v1/tasks', tasks);

const port = 3000;

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port, console.log(`Server is listening on port ${port}...`));
    } catch (error) {
        console.error(error)
    }
}


start();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/natureTravel', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('Connected to the database');
});

const destinationRoutes = require('./routes/destinations');
const planningRoutes = require('./routes/planning');
const bookingRoutes = require('./routes/booking');

app.use('/api/destinations', destinationRoutes);
app.use('/api/planning', planningRoutes);
app.use('/api/booking', bookingRoutes);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

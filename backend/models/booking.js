const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    destination: { type: mongoose.Schema.Types.ObjectId, ref: 'Destination', required: true },
    user: { type: String, required: true },
    date: { type: Date, required: true },
    status: { type: String, required: true }
});

module.exports = mongoose.model('Booking', bookingSchema);

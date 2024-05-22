const mongoose = require('mongoose');

const planingSchema = new mongoose.Schema({
    destination: {type: mongoose.Schema.Types.ObjectId, ref: 'Destination', required: true},
    date: {type: 'string', required: true},
    participants: {type: 'number', required: true}
});

module.exports = mongoose.model('Planing', planingSchema);
const mongoose = require('mongoose');

const destinationSchema = new mongoose.Schema({
    name: {type : 'string', required: true},
    type: {type : 'string', required: true},
    description: {type : 'string', required: true}
});

module.exports = mongoose.model('Destination', destinationSchema);
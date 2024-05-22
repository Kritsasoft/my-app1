const express = require('express');
const router = express.Router();
const Destination = require('backend/models/destination');

// Get all destinations
router.get('/', async (req, res) => {
    try {
        const destinations = await Destination.find();
        res.json(destinations);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Add a new destination
router.post('/', async (req, res) => {
    const destination = new Destination({
        name: req.body.name,
        type: req.body.type,
        description: req.body.description
    });

    try {
        const newDestination = await destination.save();
        res.status(201).json(newDestination);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;

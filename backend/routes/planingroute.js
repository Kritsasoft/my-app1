const express =  require('express');
const router = express.Router();
const Planing = require('backend/models/planing');

router.get('/', async (req, res) => {
    try {
        const planings = await Planing.find().populate('destination');
        res.json(planings);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.post('/', async (req, res) => {
    const planing = new Planing({
        destination: req.body.destination,
        activities: req.body.activities,
        date: req.body.date
    });

    try {
        const newPlaning = await planing.save();
        res.status(201).json(newPlaning);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;
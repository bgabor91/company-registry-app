const router = require('express').Router();
const Locations = require('../models/dbHelper');


router.post('/', (req, res) => {
    Locations.addLocation(req.body)
        .then(location => {
            res.status(200).json(location);
        })
        .catch(err => {
            res.status(500).json({ message: 'Cannot add company form' });
        });
});

router.get('/', (req, res) => {
    Locations.findLocation(req.body)
        .then(location => {
            res.status(200).json(location);
        })
        .catch(err => {
            res.status(500).json({ message: 'Cannot find companies' });
        });
});

router.get('/:id', (req, res) => {
    const { id } = req.params;

    Locations.findLocationById(id)
        .then(location => {
            if (location) {
                res.status(200).json(location);
            } else {
                res.status(404).json({ message: 'Record not found' });
            }
        })
        .catch(err => {
            res.status(500).json({ message: 'Cannot find company form' });
        });
});

module.exports = router;

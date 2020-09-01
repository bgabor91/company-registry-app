const router = require('express').Router();
const Companies = require('../models/dbHelper');

router.post('/', (req, res) => {
    Companies.add(req.body)
        .then(company => {
            res.status(200).json(company);
        })
        .catch(err => {
            res.status(500).json("Error: " + err);
        });
});

router.get('/', (req, res) => {
    Companies.find(req.body)
        .then(company => {
            res.status(200).send(company);
        })
        .catch(err => {
            res.status(500).json({ message: 'Cannot find companies' });
        });
});

router.get('/:id', (req, res) => {
    const { id } = req.params;

    Companies.findById(id)
        .then(company => {
            if (company) {
                res.status(200).json(company);
            } else {
                res.status(404).json({ message: 'Record not found' });
            }
        })
        .catch(err => {
            res.status(500).json({ message: 'Cannot find company' });
        });
});

router.delete('/:id', (req, res) => {
    const { id } = req.params;

    Companies.remove(id)
        .then(count => {
            if (count > 0) {
                res.status(200).json({ message: 'Successfully deleted' });
            } else {
                res.status(404).json({ message: 'Unable to locate record' });
            }
        })
        .catch(err => {
            res.status(500).json({ message: 'Cannot find company' });
        });
});

router.patch('/:id', (req, res) => {
    const { id } = req.params;
    const changes = req.body;

    Companies.update(id, changes)
        .then(company => {
            if (company) {
                res.status(200).json(company);
            } else {
                res.status(404).json({ message: 'Record not found' });
            }
        })
        .catch(err => {
            res.status(500).json({ message: 'Error updating record' });
        });
});

module.exports = router;

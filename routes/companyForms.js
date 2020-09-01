const router = require('express').Router();
const CompanyForms = require('../models/dbHelper');

router.post('/', (req, res) => {
    CompanyForms.addCompanyForm(req.body)
        .then(form => {
            res.status(200).json(form);
        })
        .catch(err => {
            res.status(500).json({ message: 'Cannot add company form' });
        });
});

router.get('/', (req, res) => {
    CompanyForms.findCompanyForm(req.body)
        .then(form => {
            res.status(200).json(form);
        })
        .catch(err => {
            res.status(500).json({ message: 'Cannot find companies' });
        });
});

router.get('/:id', (req, res) => {
    const { id } = req.params;

    CompanyForms.findCompanyFormById(id)
        .then(form => {
            if (form) {
                res.status(200).json(form);
            } else {
                res.status(404).json({ message: 'Record not found' });
            }
        })
        .catch(err => {
            res.status(500).json({ message: 'Cannot find company form' });
        });
});

module.exports = router;

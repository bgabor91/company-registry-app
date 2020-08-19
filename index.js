const express = require('express');
const Companies = require('./models/dbHelper');
const CompanyForms = require('./models/dbHelper');
const Locations = require('./models/dbHelper');

const server = express();

server.use(express.json({ extended: false }));

const PORT = process.env.PORT || 5000;

server.get('/', (req, res) => res.send("I am your server"));

server.post('/api/companies', (req, res) => {
    Companies.add(req.body)
        .then(company => {
        return res.status(200).send(company);
        })
        .catch(err => {
            res.status(500).json({ message: 'Cannot add company' });
        });
});

server.get('/api/companies', (req, res) => {
    Companies.find(req.body)
        .then(company => {
            res.status(200).send(company);
        })
        .catch(err => {
            res.status(500).json({ message: 'Cannot find companies' });
        });
});

server.get('/api/companies/:id', (req, res) => {
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

server.delete('/api/companies/:id', (req, res) => {
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

server.patch('/api/companies/:id', (req, res) => {
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

server.post('/api/company_forms', (req, res) => {
    CompanyForms.addCompanyForm(req.body)
        .then(form => {
            res.status(200).json(form);
        })
        .catch(err => {
            res.status(500).json({ message: 'Cannot add company form' });
        });
});

server.get('/api/company_forms', (req, res) => {
    CompanyForms.findCompanyForm(req.body)
        .then(form => {
            res.status(200).json(form);
        })
        .catch(err => {
            res.status(500).json({ message: 'Cannot find companies' });
        });
});

server.get('/api/company_forms/:id', (req, res) => {
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

server.post('/api/locations', (req, res) => {
    Locations.addLocation(req.body)
        .then(location => {
            res.status(200).json(location);
        })
        .catch(err => {
            res.status(500).json({ message: 'Cannot add company form' });
        });
});

server.get('/api/locations', (req, res) => {
    Locations.findLocation(req.body)
        .then(location => {
            res.status(200).json(location);
        })
        .catch(err => {
            res.status(500).json({ message: 'Cannot find companies' });
        });
});

server.get('/api/locations/:id', (req, res) => {
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

server.listen(PORT, () => {
    console.log(`\n *** Server running on port ${PORT} *** \n`);
});

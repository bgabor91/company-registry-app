const express = require('express');
const Companies = require('./models/dbHelper');
const CompanyForms = require('./models/dbHelper');

const server = express();

server.use(express.json());

const PORT = 5000;

server.get('/', (req, res) => {
    res.json({ message: "I am server" });
});

server.post('/api/companies', (req, res) => {
    Companies.add(req.body)
        .then(company => {
            console.log(company)
            res.status(200).json(company);
        })
        .catch(err => {
            res.status(500).json({ message: 'Cannot add company' });
        });
});

server.get('/api/companies', (req, res) => {
    Companies.find(req.body)
        .then(company => {
            res.status(200).json(company);
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

server.post('/api/companies/:id/company_form', (req, res) => {
    const { id } = req.params;
    const companyForm = req.body;
    //const company = Companies.findById(id);
    //let formId = null;
    
    CompanyForms.addCompanyForm(req.body)
        .then(company_form => {
            res.status(200).json(company_form);
        })
        .catch(err => {
            res.status(500).json({ message: 'Cannot add company form' });
        });
    
    Companies.findById(id)
        .then(company => {
            if (!company) {
                res.status(404).json({ message: 'Invalid id' });
            } 
        })
        .catch(err => {
            res.status(500).json({ message: 'Error finding company' });
        });

    // if (!company.company_form_id) {
    //     company['company_form_id'] = parseInt(formId, 10);
    // }
});


server.listen(PORT, () => {
    console.log(`\n *** Server running on port ${PORT} *** \n`);
});

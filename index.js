const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const companiesRouter = require('./routes/companies');
const companyFormRouter = require('./routes/companies');
const locationsRouter = require('./routes/companies');

require('dotenv').config();

const server = express();

server.use(cors());
server.use(express.json({ extended: false }));
server.use(bodyParser.json());

const PORT = process.env.PORT || 5000;

server.get('/', (req, res) => res.send("I am your server"));

server.use('/api/companies', companiesRouter);
server.use('/api/company_forms', companyFormRouter);
server.use('/api/locations', locationsRouter);

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
    // Set static folder
    server.use(express.static('client/build'));

    server.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

server.listen(PORT, () => {
    console.log(`\n *** Server running on port ${PORT} *** \n`);
});

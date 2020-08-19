const knex = require('knex');
const config = require('../knexfile');
const db = knex(config.development);

// companies queries
async function add(company) {
    return await db('companies').insert(company);
}

function find() {
    return db('companies');
}

function findById(id) {
    return db('companies')
        .where({ id })
        .first();
}

function remove(id) {
    return db('companies')
        .where({ id })
        .del();
}

function update(id, changes) {
    return db('companies')
        .where({ id })
        .update(changes, [id])
        .then(() => {
            return findById(id);
        });
}

// company_forms queries

async function addCompanyForm(newForm) {
    const { id } = await db('company_forms').insert(newForm);
    return id;
}

function findCompanyForm() {
    return db('company_forms');
}

function findCompanyFormById(id) {
    return db('company_forms')
        .where({ id })
        .first();
}

//locations queries

async function addLocation(newLocation) {
    return await db('locations').insert(newLocation);
}

function findLocation() {
    return db('locations');
}

function findLocationById(id) {
    return db('locations')
        .where({ id })
        .first();
}

module.exports = {
    add,
    find,
    findById,
    remove,
    update,
    addCompanyForm,
    findCompanyForm,
    findCompanyFormById,
    addLocation,
    findLocation,
    findLocationById
};

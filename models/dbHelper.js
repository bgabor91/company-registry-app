const knex = require('knex');
const config = require('../knexfile');
const db = knex(config.development);

async function add(company, company_form_id, location_id) {
    const { id } = await db('companies').insert(company);
    return id;
}

function findByCompanyFormId(id) {
    return db('company_forms')
        .where({ id })
        .first();
}

function findByLocationId(id) {
    return db('locations')
        .where({ id })
        .first();
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

function findCompanyFormById(id) {

}

async function addCompanyForm(newForm) {
    const { id } = await db('company_forms').insert(newForm);
    return id;
}

function updateCompanyForm(id, company_id) {

}

module.exports = {
    add,
    find,
    findById,
    remove,
    update,
    addCompanyForm,
    updateCompanyForm
};

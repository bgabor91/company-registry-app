
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('company_forms').del()
    .then(function () {
      // Inserts seed entries
      return knex('company_forms').insert([
        { id: 1, company_form: 'Ltd.'},
        { id: 2, company_form: 'Plc.'},
        { id: 3, company_form: 'Llp.'},
        { id: 4, company_form: 'Puc.'}
      ]);
    });
};

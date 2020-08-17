
exports.up = function (knex) {
    return knex.schema
        .createTable('companies', tbl => {
            tbl.increments();
            tbl.string('name').notNullable().index();
            tbl.integer('tax_number').notNullable();
            tbl.integer('company_registration_number').notNullable();
            tbl.integer('phone_number').notNullable();
            tbl.integer('bank_account_number').notNullable();
            tbl.string('comment').notNullable();
            tbl.timestamps(true, true);
            tbl.integer('company_form_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('company_forms')
                .onDelete('CASCADE')
                .onUpdate('CASCADE');
            tbl.integer('location_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('locations')
                .onDelete('CASCADE')
                .onUpdate('CASCADE');
        })
        .createTable('company_forms', tbl => {
            tbl.increments();
            tbl.string('company_form');
            tbl.timestamps(true, true);
        })
        .createTable('locations', tbl => {
            tbl.increments();
            tbl.string('location');
            tbl.timestamps(true, true);
        })
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists("companies")
        .dropTableIfExists("company_forms")
        .dropTableIfExists("locations");
};


exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('locations').del()
    .then(function () {
      // Inserts seed entries
      return knex('locations').insert([
        { id: 1, location: 'London'},
        { id: 2, location: 'Dublin'},
        { id: 3, location: 'Bristol'},
        { id: 4, location: 'Newcastle'},
        { id: 5, location: 'Wellington'},
        { id: 6, location: 'Edinburgh'},
        { id: 7, location: 'Newport'},
        { id: 8, location: 'Cardiff'},
        { id: 9, location: 'Leicester'},
        { id: 10, location: 'Cambridge'}
      ]);
    });
};

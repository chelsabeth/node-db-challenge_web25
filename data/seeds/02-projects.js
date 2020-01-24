
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {id: 1, name: 'learn to code'},
        {id: 2, name: 'practice singing'},
        {id: 3, name: 'work meeting'}
      ]);
    });
};


exports.seed = function(knex) {
      return knex('resources').insert([
        {id: 1, name: 'computer'},
        {id: 2, name: 'microphone'},
        {id: 3, name: 'conference room'}
      ]);
};

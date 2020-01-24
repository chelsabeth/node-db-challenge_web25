
exports.seed = function(knex) {
      return knex('projects').insert([
        {id: 1, name: 'learn to code'},
        {id: 2, name: 'practice singing'},
        {id: 3, name: 'work meeting'}
      ]);
};


exports.seed = function(knex) {
      return knex('tasks').insert([
        {id: 1, description: 'want to learn HTML and CSS 1st', notes: 'research bootcamps', project_id: 1},
        {id: 2, description: 'research good vocal coach', project_id: 2},
        {id: 3, description: 'get up in plenty of time', notes: 'dont be late!', project_id: 3}
      ]);
};


exports.up = function(knex) {
  return knex.schema 
  .createTable('resources', tbl => {
      tbl.increments();
      tbl.string('name').notNullable();
      tbl.string('description');
  })
  .createTable('projects', tbl => {
      tbl.increments();
      tbl.string('name').notNullable();
      tbl.string('description')
      tbl.boolean('completed').defaultTo(false);
  })
  .createTable('tasks', tbl => {
      tbl.increments();
      tbl.string('description').notNullable();
      tbl.string('notes');
      tbl.boolean('completed').defaultTo(false);
      // project_id...foreign key that points to projects table
      tbl.integer("project_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("projects")
      .onDelete("RESTRICT")
      ontimeupdate("CASCADE");
  })
  .createTable('project_task_resources', tbl => {
      tbl.increments();
      // foreign key that points to tasks table
      tbl.integer("task_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("tasks")
      .onDelete("RESTRICT")
      .onUpdate("CASCADE");
      // foreign key that points to resources table
      tbl.integer("resource_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("resources")
      .onDelete("RESTRICT")
      .onUpdate("CASCADE");
      // foreign key that points to projects table
      tbl.integer("project_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("projects")
      .onDelete("RESTRICT")
      .onUpdate("CASCADE");
  })
};

exports.down = function(knex) {
   // can't take off your socks without taking off your shoes...put the tables backward
   return knex.schema
   .dropTableIfExists("project_task_resources")
   .dropTableIfExists("tasks")
   .dropTableIfExists("projects")
   .dropTableIfExists("resources");
};

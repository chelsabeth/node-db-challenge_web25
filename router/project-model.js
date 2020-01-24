const db = require("../data/db-config.js");

module.exports = {
    getProjects,
    getResources,
    getTasks
}

function getProjects() {
    return db.select('*').from('projects');
}

function getResources() {
    return db.select('*').from('resources');
}

function getTasks() {
    return db('tasks')
    .join('projects', 'projects.id', 'tasks.project_id')
    .select('projects.name', 'projects.description', 'tasks')
    .where('tasks.project_id', 'projects.id');
}
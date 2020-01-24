const db = require("../data/db-config.js");

module.exports = {
    getProjects,
    getResources,
    getTasks,
    addProject,
    addProject,
    addTask,
    addResource
}

function getProjects() {
    // SELECT * FROM projects
    return db.select('*').from('projects');
}

function getResources() {
    // SELECT * FROM resources
    return db.select('*').from('resources');
}

function getTasks() {
    // SELECT projects.name, projects.description, tasks.project_id, tasks.description, tasks.notes
    // FROM projects, tasks
    // WHERE projects.id = tasks.project_id;
    return db('tasks')
    .join('projects', 'projects.id', 'tasks.project_id')
    .select('projects.name', 'projects.description', 'tasks.description', 'tasks.notes');
}

function addProject(project) {
    return db('projects')
    .insert(project);
}

function addTask(task) {
    return db('tasks')
    .insert(task)
}

function addResource(resource) {
    return db('resources')
    .insert(resource)
}
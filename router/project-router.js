const express = require("express");

const Projects = require("./project-model.js");

const router = express.Router();

router.get("/", (req, res) => {
    Projects.getProjects()
    .then(projects => {
        res.json(projects);
    })
    .catch(err => {
        res.status(500).json({message: "Failed to get projects"})
    });
});

router.get("/resources", (req, res) => {
    Projects.getResources()
    .then(resources => {
        res.json(resources);
    })
    .catch(err => {
        res.status(500).json({message: "Failed to get resources"})
    });
});

router.get("/tasks", (req, res) => {
    Projects.getTasks()
    .then(tasks => {
        res.json(tasks);
    })
    .catch(err => {
        res.status(500).json({message: "Failed to get tasks"})
    });
});

router.post("/", (req, res) => {
    const projectData = req.body;

    Projects.addProject(projectData)
    .then(id => {
        res.status(201).json({newProject: id});
    })
    .catch(err => {
        res.status(500).json({message: "Failed to create new project"})
    });
});

router.post("/tasks", (req,res) => {
    const taskData = req.body;

    Projects.addTask(taskData)
    .then(id => {
        res.status(201).json({newTask: id})
    })
    .catch(err => {
        res.status(500).json({message: "Failed to create new task"})
    });
});

router.post("/resources", (req, res) => {
    const resData = req.body;

    Projects.addResource(resData)
    .then(id => {
        res.status(201).json({newResource: id})
    })
    .catch(err => {
        res.status(500).json({message: "Failed to create a new resource"})
    });
});
module.exports = router;
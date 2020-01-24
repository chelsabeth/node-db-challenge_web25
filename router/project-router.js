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

module.exports = router;
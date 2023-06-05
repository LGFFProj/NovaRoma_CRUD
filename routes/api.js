const express = require("express");
const router = express.Router();

const TasksController = require("../app/controllers/api/TasksController");
const AgendasController = require("../app/controllers/api/AgendasController");

// Rotas das Tarefas
router.get('/tasks', TasksController.list)
router.get('/tasks/:id', TasksController.show)
router.post('/tasks', TasksController.save)
router.delete('/tasks/:id', TasksController.remove)
router.put('/tasks/:id', TasksController.update)
router.put('/tasks/:id/update-status', TasksController.updateStatus)

//Rotas das Agendas
router.post('/agenda', AgendasController.save)
router.get('/agenda/:id', AgendasController.remove)
router.get('/agendas/', AgendasController.listar)


module.exports = router;
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
router.post('/agendas', AgendasController.save)
router.delete('/agendas/:id', AgendasController.remove)
router.get('/agendas/', AgendasController.listar)
router.get('/agendas/:id', AgendasController.show)
router.put('/agendas/:id', AgendasController.update)


module.exports = router;
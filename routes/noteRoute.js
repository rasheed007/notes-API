const express = require('express')

const noteController = require('../controllers/noteController.js');

const noteRouter = express.Router();

noteRouter.post('/', noteController.createNote)

noteRouter.get('/:id', noteController.getNote)

noteRouter.get('/', noteController.getNotes)

noteRouter.put('/:id', noteController.updateNote)

noteRouter.delete('/:id', noteController.deleteNote)

module.exports = noteRouter;
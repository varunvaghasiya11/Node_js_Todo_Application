const express = require('express');
const routes = express.Router();
const controller = require('../controllers/todocontroller');

routes.get('/',controller.defaultpage);
routes.post('/',controller.addtodo);
routes.get('/edit/:id', controller.edittodo);
routes.post('/update/:id', controller.update);
routes.get('/delete/:id',controller.deletetodo);

module.exports = routes;
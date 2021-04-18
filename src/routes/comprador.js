const express = require('express');
const router = express.Router();

const compradorController = require('../controllers/compradorController');

router.get('/', compradorController.listar);
router.post('/add', compradorController.guardar); //router escucha a traves del metodo post una ruta nueva llamada /add
router.get('/delete/:id', compradorController.eliminar); //recibimos el "id" como parametro de ruta
router.get('/update/:id', compradorController.editar);
router.post('/update/:id', compradorController.savechanges);

module.exports = router;
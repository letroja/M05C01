const express = require('express'); //requiero express
const router = express.Router(); //de express requiero solo la funcion router

const {index,about} = require('../controllers/mainControllers');

router.get('/', index); //metodo get recibe minimo 2 paramatros
router.get('/about',about);

module.exports = router;
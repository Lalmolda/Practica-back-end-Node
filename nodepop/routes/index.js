var express = require('express');
var router = express.Router();
const anuncio = require('../models/anuncios');


/* GET home page. */
router.get('/', async function(req, res, next) {
  res.locals.title="Práctica Back-end";
  res.locals.prueba="PRUEBA";
  res.locals.anuncio= await anuncio.find();
  //res.render('index', { title: 'Express' });
  res.render('index');
});

router.get('/enelbody', (req, res, next) => {
  res.send("ESTOY ENELBODY");
});

module.exports = router;

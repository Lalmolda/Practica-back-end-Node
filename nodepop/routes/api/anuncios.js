const express = require('express');
const router = express.Router();
const anuncio = require('../../models/anuncios');
const {query, validationResult} = require('express-validator');

router.get('/', async (req, res, next) => {
    try {
    console.log("ESTOY EN API");
    //res.send("RESPONDO");
    const anuncios = await anuncio.find();
    console.log(anuncios);
    res.json({ resultados: anuncios });


    // filtros
    const filterByName = req.query.name;
    const filterByAge = req.query.age;
    // paginación
    const skip = req.query.skip;
    const limit = req.query.limit;
    // ordenar
    const sort = req.query.sort;
    // selección de campos
    const fields = req.query.fields;
    

  }catch (error) {
    next(error);
  }
  });

  module.exports = router;
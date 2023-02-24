var express = require('express');
var router = express.Router();
const anuncio = require('../models/anuncios');
const apiAnuncio = require('../routes/api/anuncios');

/* GET home page. */
router.get('/', async function(req, res, next) {
  
  try {
    res.locals.title="Práctica Back-end";
    res.locals.prueba="PRUEBA";
    //res.send("RESPONDO");
    


    // filtros
    const filterByName = req.query.nombre;
    const filterByStatus = req.query.estado;
    const filterByMinPrice = req.query.pMinimo;
    const filterByMaxPrice = req.query.pMaximo;
    const filterPrecio = req.query.precio;
    const filterByTag = req.query.tag;
    // paginación
    const skip = req.query.skip;
    const limit = req.query.limit;
    // ordenar
    const sort = req.query.sort;
    // selección de campos
    const select = req.query.select;

    const filtro = {};
    var precio = {};
    if(filterByName){
      filtro.nombre=filterByName;
    }

    if(filterByStatus){
      filtro.estado=filterByStatus;
    }
    
    if(filterByTag){
      filtro.tag=filterByTag;
    }

//QUERY A HACER: db.anuncios.find({"precio":{"$gt": 47, "$lt": 2000}})

    if(filterByMinPrice){
      const min = { "$gte": filterByMinPrice };
      if(filtro.precio){
        Object.assign(filtro.precio,min);
      }else{
        filtro.precio=min;
      }
      
    }
    
    //console.log("SOY PRECIO SIN JODER "+filtro.precio);

    if(filterByMaxPrice){
      console.log("ENTRO A MAX PRICE CON VALOR "+filterByMaxPrice)
      const max = { "$lte": filterByMaxPrice };
      if(filtro.precio){
        Object.assign(filtro.precio,max);
      }else{
        filtro.precio=max;
      }
    }

    
    //console.log("SOY PRECIO1 "+  Object.keys(filtro.precio));
    //console.log("SOY PRECIO2 "+  filtro.precio[Object.keys(filtro.precio)]);
    /*for(let i in filtro.precio){
      console.log("LENGTH DEL OBJETO nuevo ES "+filtro.precio[i])
    }*/

   if(filterPrecio){
    console.log("LLEGO A NUEVO FILTRO "+filterPrecio);
    precio = {"precio": filterPrecio};
    console.log(precio);
   }
  

    //const anuncios = await anuncio.find(filtro.name);
    res.locals.anuncio = await anuncio.lista(filtro, precio, skip, limit, sort, select);
    //res.locals.anuncio= await anuncio.find();
    res.render('index');

  }catch (error) {
    next(error);
  }
});

module.exports = router;

const mongoose = require('mongoose');


// Defining Anuncio schema
const anuncioSchema = new mongoose.Schema(
    { nombre: String,  
    estado: String, //se vende o se busca
    precio: Number,
    foto: String,
    tag: Array,
    }
)

//Static method anuncio

anuncioSchema.statics.lista = function(filtro, precio, skip, limit, sort) {
    console.log("ANTES DE EJECUTAR PRECIO VALE "+precio);
    const query = anuncio.find(filtro); // thenables
    //const query = anuncio.find(precio);
    query.find(precio);
    query.skip(skip);
    query.limit(limit);
    query.sort(sort);
    return query.exec();
  }

  //Static method que saca los distintos tags unicos de todos los anuncios.
  anuncioSchema.statics.distinctTags = function(tag) {
    const query = anuncio.distinct(tag); // thenables
    return query.exec();
  }

// Defining Anuncio model
const anuncio = mongoose.model('anuncio', anuncioSchema);

// exportar el modelo
module.exports = anuncio;
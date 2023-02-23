const mongoose = require('mongoose');


// Defining User schema
const anuncioSchema = new mongoose.Schema(
    { nombre: String,  
    estado: String, //se vende o se busca
    precio: Number,
    foto: String,
    tag: String,
    }
)

// Defining Anuncio model
const anuncio = mongoose.model('anuncio', anuncioSchema);

anuncioSchema.statics.lista = function(filtro, skip, limit, sort, fields) {
    const query = anuncio.find(filtro); // thenables
    query.skip(skip);
    query.limit(limit);
    query.sort(sort);
    query.select(fields);
    return query.exec();
  }

// exportar el modelo
module.exports = anuncio;
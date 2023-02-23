'use strict';

// Require mongoose module
const connection = require('../lib/connectMongoose');
const anuncio = require('../models/anuncios');
  

main().catch(err => console.log('Hubo un error', err));

async function main() {

  // inicializamos colección de agentes
  await initAnuncios();

  connection.close();

}

async function initAnuncios() {
  // borrar todos los documentos de la colección de anuncios
  const deleted = await anuncio.deleteMany();
  console.log(`Eliminados ${deleted.deletedCount} anuncios.`);

  // crear anuncios iniciales
  const inserted = await anuncio.insertMany([
    { nombre: 'Balon', estado: 'se vende', precio: 48.3, foto:'images/balon.jpg', tag: 'work'},
    { nombre: 'Sofa', estado: 'se vende', precio: 199.99, foto:'images/sofa.jpg', tag: 'work'},
    { nombre: 'Balon', estado: 'se vende', precio: 48.3, foto:'images/balon.jpg', tag: 'work'},
    { nombre: 'Sofa', estado: 'se vende', precio: 199.99, foto:'images/sofa.jpg', tag: 'work'},
    { nombre: 'Balon', estado: 'se vende', precio: 48.3, foto:'images/balon.jpg', tag: 'work'},
    { nombre: 'Sofa', estado: 'se vende', precio: 199.99, foto:'images/sofa.jpg', tag: 'work'},
    { nombre: 'Balon', estado: 'se vende', precio: 48.3, foto:'images/balon.jpg', tag: 'work'},
    { nombre: 'Sofa', estado: 'se vende', precio: 199.99, foto:'images/sofa.jpg', tag: 'work'},
    { nombre: 'Balon', estado: 'se vende', precio: 48.3, foto:'images/balon.jpg', tag: 'work'},
    { nombre: 'Sofa', estado: 'se vende', precio: 199.99, foto:'images/sofa.jpg', tag: 'work'},
  ]);
  console.log(`Creados ${inserted.length} anuncios`);
}
